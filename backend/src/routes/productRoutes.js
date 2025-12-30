import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { createDummyProducts,filterProducts, getAllProducts, getFeaturedProducts, getNewArrivals, getProductById, getTopSellingProducts } from "../controllers/productController.js";


const router = express.Router();

// Public routes
router.post("/addproducts", protect, createDummyProducts);

router.get("/", protect, getAllProducts);

router.post("/:id", protect, getProductById);

router.post("/filter/products", protect, filterProducts);
// router.post("/filter", protect, filterProducts);

router.get("/products/new-arrivals", getNewArrivals);
router.get("/products/featured", getFeaturedProducts);
router.get("/products/top-selling", getTopSellingProducts);

export default router;
