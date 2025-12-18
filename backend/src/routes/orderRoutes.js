import express from "express";
import {
    createOrder,
    getMyOrders,
    getOrderById,
    cancelOrder,
    requestReturn,
    markOrderPaid,
    paymentFailed,
    refundOrder,
    getAllOrders,
    updateOrderStatus,
    shipOrder
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

// User
router.post("/create", protect, createOrder);
router.get("/", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id/cancel", protect, cancelOrder);
router.post("/:id/return", protect, requestReturn);

// Payment
router.put("/:id/pay", protect, markOrderPaid);
router.put("/:id/payment-failed", protect, paymentFailed);
router.put("/:id/refund", protect, refundOrder);

// Admin
router.get("/admin/all", protect, getAllOrders);
router.put("/admin/:id/status", protect, updateOrderStatus);
router.put("/admin/:id/ship", protect, shipOrder);

export default router;
