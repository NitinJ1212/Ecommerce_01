import mongoose from "mongoose";

// ---------------------------
// Order Item Schema
// ---------------------------
const OrderItemSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },

        price: {
            type: Number,
            required: true
            // price at purchase time
        },

        quantity: {
            type: Number,
            required: true,
            min: 1
        },

        subtotal: {
            type: Number,
            required: true
        },

        sku: { type: String }, // optional
        variant: { type: String } // size / color / etc
    },
    { _id: false }
);

// ---------------------------
// Shipping Address Schema
// ---------------------------
const ShippingAddressSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true }
    },
    { _id: false }
);

// ---------------------------
// Payment Info Schema
// ---------------------------
const PaymentSchema = new mongoose.Schema(
    {
        method: {
            type: String,
            enum: ["COD", "CARD", "UPI", "NETBANKING", "WALLET"],
            required: true
        },

        transactionId: { type: String },
        paymentGateway: { type: String },

        status: {
            type: String,
            enum: ["PENDING", "PAID", "FAILED", "REFUNDED"],
            default: "PENDING"
        },

        paidAt: { type: Date },

        amount: { type: Number }
    },
    { _id: false }
);

// ---------------------------
// Order Status Timeline
// ---------------------------
const StatusHistorySchema = new mongoose.Schema(
    {
        status: { type: String },
        message: { type: String },
        updatedAt: { type: Date, default: Date.now }
    },
    { _id: false }
);

// ---------------------------
// Main Order Schema
// ---------------------------
const OrderSchema = new mongoose.Schema(
    {
        orderNumber: {
            type: String,
            unique: true,
            index: true
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        items: {
            type: [OrderItemSchema],
            required: true
        },

        shippingAddress: {
            type: ShippingAddressSchema,
            required: true
        },

        payment: {
            type: PaymentSchema,
            required: true
        },

        // ---------- Pricing ----------
        itemsPrice: { type: Number, required: true },
        taxPrice: { type: Number, default: 0 },
        shippingPrice: { type: Number, default: 0 },
        discountPrice: { type: Number, default: 0 },

        totalPrice: {
            type: Number,
            required: true
        },

        // ---------- Order Status ----------
        orderStatus: {
            type: String,
            enum: [
                "PLACED",
                "CONFIRMED",
                "PROCESSING",
                "SHIPPED",
                "OUT_FOR_DELIVERY",
                "DELIVERED",
                "CANCELLED",
                "RETURN_REQUESTED",
                "RETURNED",
                "REFUNDED"
            ],
            default: "PLACED"
        },

        statusHistory: [StatusHistorySchema],

        // ---------- Shipping ----------
        trackingNumber: { type: String },
        shippingProvider: { type: String },
        shippedAt: { type: Date },
        deliveredAt: { type: Date },

        // ---------- Cancellation / Refund ----------
        cancelReason: { type: String },
        refundAmount: { type: Number },
        refundedAt: { type: Date },

        // ---------- Meta ----------
        notes: { type: String },
        isPaid: { type: Boolean, default: false },
        isDelivered: { type: Boolean, default: false }
    },
    {
        timestamps: true
    }
);

// ---------------------------
// Indexes (Performance)
// ---------------------------
OrderSchema.index({ user: 1 });
OrderSchema.index({ orderStatus: 1 });
OrderSchema.index({ createdAt: -1 });

// ---------------------------
// Export
// ---------------------------
const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);
export default Order;
