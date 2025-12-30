import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { paymentIntent } from "../controllers/paymentController.js";


const router = express.Router();

// User
router.post("/create-payment-intent",  paymentIntent);

export default router;
