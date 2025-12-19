import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { createDummyProducts, getAllProducts, getFeaturedProducts, getNewArrivals, getProductById, getTopSellingProducts } from "../controllers/productController.js";

const router = express.Router();

// Public routes
router.post("/addproducts", createDummyProducts);

router.get("/", getAllProducts);

router.post("/:id", getProductById);

router.get("/products/new-arrivals", getNewArrivals);
router.get("/products/featured", getFeaturedProducts);
router.get("/products/top-selling", getTopSellingProducts);

export default router;
