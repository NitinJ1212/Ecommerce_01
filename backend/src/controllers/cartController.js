import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";

// 🧮 helper to recalculate totals
const calculateTotals = (cart) => {
    cart.totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    cart.totalPrice = cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
};

// 📦 GET CART
export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id }).populate("items.product", "name price images");

        if (!cart) {
            return res.status(200).json({ items: [], totalItems: 0, totalPrice: 0 });
        }

        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ➕ ADD TO CART
export const addToCart = async (req, res) => {
    try {
        const { productId, quantity = 1 } = req.body;

        const product = await Product.findById(productId);
        if (!product)
            return res.status(404).json({ message: "Product not found" });

        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            cart = new Cart({
                user: req.user._id,
                items: []
            });
        }

        const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({
                product: productId,
                quantity,
                price: product.price
            });
        }

        calculateTotals(cart);
        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 🔄 UPDATE QUANTITY
export const updateCartItem = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        const cart = await Cart.findOne({ user: req.user._id });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        const itemIndex = cart.items.findIndex(
            (item) => item.product.toString() === productId
        );
        if (itemIndex === -1) {
            return res.status(404).json({ message: "Item not found in cart" });
        }
        if (quantity <= 0) {
            cart.items.splice(itemIndex, 1);
        } else {
            cart.items[itemIndex].quantity = quantity;
        }

        calculateTotals(cart);
        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// ➖ REMOVE ITEM
export const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;

        const cart = await Cart.findOne({ user: req.user._id });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        cart.items = cart.items.filter(
            (item) => item.product.toString() !== productId
        );

        calculateTotals(cart);
        await cart.save();

        res.json({ cart, status: true });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 🗑 CLEAR CART
export const clearCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        cart.items = [];
        cart.totalItems = 0;
        cart.totalPrice = 0;

        await cart.save();

        res.json({ message: "Cart cleared" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// POST /api/cart/sync
// Body: { items: [{ product: productId, quantity, price }] }
export const syncCart = async (req, res) => {
    try {
        const userId = req.user._id;
        const localCart = req.body.items || [];

        if (!Array.isArray(localCart) || localCart.length === 0) {
            return res.status(400).json({ message: "Local cart is empty" });
        }

        // Fetch existing cart or create a new one
        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            cart = new Cart({ user: userId, items: [] });
        }

        // Merge local cart into server cart
        localCart.forEach((localItem) => {
            const existingIndex = cart.items.findIndex(
                (item) => item.product.toString() === localItem.product
            );

            if (existingIndex > -1) {
                // If product exists, increase quantity
                cart.items[existingIndex].quantity += localItem.quantity;
            } else {
                // Add new product
                cart.items.push({
                    product: localItem.product,
                    quantity: localItem.quantity,
                    price: localItem.price, // price snapshot
                });
            }
        });

        calculateTotals(cart);
        await cart.save();

        // Optionally populate product details
        await cart.populate("items.product", "name price images");

        res.status(200).json(cart);
    } catch (error) {
        console.error("Error syncing cart:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

