import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { createDummyProducts, getAllProducts, getProductById } from "../controllers/productController.js";

const router = express.Router();

// Public routes
router.post("/addproducts", createDummyProducts);

router.get("/", getAllProducts);

router.post("/:id", getProductById);

export default router;
