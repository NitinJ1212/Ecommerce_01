import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { cacheMiddleware } from "../middleware/cache.middleware.js";
import { createDummyProducts, filterProducts, getAllProducts, getFeaturedProducts, getNewArrivals, getProductById, getTopSellingProducts } from "../controllers/productController.js";


const router = express.Router();

// Public routes
router.post("/addproducts", protect, createDummyProducts);

<<<<<<< HEAD
router.get("/", protect, cacheMiddleware(() => "products:all", 10), getAllProducts);
=======
router.get("/", cacheMiddleware(() => "products:all", 300), getAllProducts);
>>>>>>> 1569137d19793e49bbef48e8bae30f94d9d9492c

router.post("/:id", protect, getProductById);

router.post("/filter/products", protect, filterProducts);
// router.post("/filter", protect, filterProducts);

router.get("/products/new-arrivals", getNewArrivals);
router.get("/products/featured", getFeaturedProducts);
router.get("/products/top-selling", getTopSellingProducts);

export default router;
