import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";
import mongoose from "mongoose";



export const createOrder = async (req, res) => {
    try {
        // const ordersPayload = Array.isArray(req.body) ? req.body : [req.body];
        const ordersPayload = req.body;
        const createdOrders = [];

        for (const payload of ordersPayload) {
            const { items, shippingAddress, payment, taxPrice = 0, shippingPrice = 0, discountPrice = 0, notes } = payload;
            /* ---------------- VALIDATIONS ---------------- */
            if (!items || !Array.isArray(items) || items.length === 0) {
                throw new Error("Order items are required");
            }
            if (!shippingAddress) {
                throw new Error("Shipping address is required");
            }
            if (!payment || !payment.method) {
                throw new Error("Payment information is required");
            }

            const requiredAddressFields = ["name", "phone", "street", "city", "state", "postalCode", "country"];
            for (const field of requiredAddressFields) {
                if (!shippingAddress[field]) {
                    throw new Error(`Shipping address ${field} is required`);
                }
            }
            /* ---------------- PRODUCT VALIDATION ---------------- */
            const productIds = items.map(item => item.product);

            for (const id of productIds) {
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    throw new Error("Invalid product ID format");
                }
            }

            const products = await Product.find({ _id: { $in: productIds } }).select("_id price");

            const productMap = new Map(products.map(p => [p._id.toString(), p]));

            let itemsPrice = 0;

            const validatedItems = items.map(item => {
                const product = productMap.get(item.product.toString());

                if (!product) {
                    throw new Error(`Product not found: ${item.product}`);
                }
                if (!item.quantity || item.quantity < 1) {
                    throw new Error("Item quantity must be at least 1");
                }
                const price = product.price;
                const subtotal = price * item.quantity;
                itemsPrice += subtotal;

                return {
                    product: product._id,
                    price,
                    quantity: item.quantity,
                    subtotal,
                    sku: item.sku || null,
                    variant: item.variant || null
                };
            });

            /* ---------------- PAYMENT ---------------- */
            const allowedMethods = ["COD", "CARD", "UPI", "NETBANKING", "WALLET"];
            if (!allowedMethods.includes(payment.method)) {
                throw new Error("Invalid payment method");
            }

            const totalPrice =
                itemsPrice +
                Number(taxPrice) +
                Number(shippingPrice) -
                Number(discountPrice);

            if (totalPrice <= 0) {
                throw new Error("Invalid total price");
            }
            /* ---------------- CREATE ORDER ---------------- */
            const order = await Order.create({
                orderNumber: `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
                user: req.user._id,
                items: validatedItems,
                shippingAddress,
                payment: {
                    method: payment.method,
                    status: "PENDING"
                },
                itemsPrice,
                taxPrice,
                shippingPrice,
                discountPrice,
                totalPrice,
                orderStatus: "PLACED",
                statusHistory: [
                    {
                        status: "PLACED",
                        message: "Order placed successfully"
                    }
                ],
                notes,
                isPaid: false,
                isDelivered: false
            });

            createdOrders.push(order);
        }

        res.status(201).json({
            success: true,
            totalOrders: createdOrders.length,
            orders: createdOrders
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to create orders"
        });
    }
};



/* ----------------------------------------------------
   GET MY ORDERS
---------------------------------------------------- */
export const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id })
            .sort({ createdAt: -1 });

        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* ----------------------------------------------------
   GET ORDER BY ID (USER / ADMIN)
---------------------------------------------------- */
export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate("items.product", "name price");

        if (!order)
            return res.status(404).json({ message: "Order not found" });

        if (
            order.user.toString() !== req.user._id.toString() &&
            req.user.role !== "admin"
        ) {
            return res.status(403).json({ message: "Not authorized" });
        }

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* ----------------------------------------------------
   CANCEL ORDER
---------------------------------------------------- */
export const cancelOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order)
            return res.status(404).json({ message: "Order not found" });

        if (!["PLACED", "CONFIRMED"].includes(order.orderStatus)) {
            return res.status(400).json({ message: "Order cannot be cancelled" });
        }

        order.orderStatus = "CANCELLED";
        order.cancelReason = req.body.reason || "Cancelled by user";

        order.statusHistory.push({
            status: "CANCELLED",
            message: order.cancelReason
        });

        await order.save();
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* ----------------------------------------------------
   REQUEST RETURN
---------------------------------------------------- */
export const requestReturn = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order)
            return res.status(404).json({ message: "Order not found" });

        if (order.orderStatus !== "DELIVERED") {
            return res.status(400).json({ message: "Return not allowed" });
        }

        order.orderStatus = "RETURN_REQUESTED";
        order.statusHistory.push({
            status: "RETURN_REQUESTED",
            message: req.body.reason || "Return requested"
        });

        await order.save();
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* ----------------------------------------------------
   MARK ORDER AS PAID
---------------------------------------------------- */
export const markOrderPaid = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order)
            return res.status(404).json({ message: "Order not found" });

        order.payment.status = "PAID";
        order.payment.transactionId = req.body.transactionId;
        order.payment.paymentGateway = req.body.paymentGateway;
        order.payment.paidAt = Date.now();
        order.payment.amount = order.totalPrice;

        order.isPaid = true;

        order.statusHistory.push({
            status: "PAID",
            message: "Payment completed successfully"
        });

        await order.save();
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* ----------------------------------------------------
   PAYMENT FAILED
---------------------------------------------------- */
export const paymentFailed = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order)
            return res.status(404).json({ message: "Order not found" });

        order.payment.status = "FAILED";

        order.statusHistory.push({
            status: "PAYMENT_FAILED",
            message: req.body.reason || "Payment failed"
        });

        await order.save();
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* ----------------------------------------------------
   REFUND ORDER
---------------------------------------------------- */
export const refundOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order)
            return res.status(404).json({ message: "Order not found" });

        order.orderStatus = "REFUNDED";
        order.payment.status = "REFUNDED";
        order.refundAmount = req.body.amount || order.totalPrice;
        order.refundedAt = Date.now();

        order.statusHistory.push({
            status: "REFUNDED",
            message: "Amount refunded"
        });

        await order.save();
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* ----------------------------------------------------
   ADMIN – GET ALL ORDERS
---------------------------------------------------- */
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("user", "name email")
            .sort({ createdAt: -1 });

        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* ----------------------------------------------------
   ADMIN – UPDATE ORDER STATUS
---------------------------------------------------- */
export const updateOrderStatus = async (req, res) => {
    try {
        const { status, message } = req.body;

        const order = await Order.findById(req.params.id);
        if (!order)
            return res.status(404).json({ message: "Order not found" });

        order.orderStatus = status;

        if (status === "DELIVERED") {
            order.isDelivered = true;
            order.deliveredAt = Date.now();
        }

        order.statusHistory.push({
            status,
            message: message || `Order moved to ${status}`
        });

        await order.save();
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* ----------------------------------------------------
   ADMIN – SHIP ORDER
---------------------------------------------------- */
export const shipOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order)
            return res.status(404).json({ message: "Order not found" });

        order.orderStatus = "SHIPPED";
        order.trackingNumber = req.body.trackingNumber;
        order.shippingProvider = req.body.shippingProvider;
        order.shippedAt = Date.now();

        order.statusHistory.push({
            status: "SHIPPED",
            message: "Order shipped"
        });

        await order.save();
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
