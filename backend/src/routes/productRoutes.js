import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { createDummyProducts, getAllProducts, getProductById, filterProducts } from "../controllers/productController.js";

const router = express.Router();

// Public routes
router.post("/addproducts", protect, createDummyProducts);

router.get("/", protect, getAllProducts);

router.post("/:id", protect, getProductById);

router.post("/filter/products", protect, filterProducts);
// router.post("/filter", protect, filterProducts);

export default router;
