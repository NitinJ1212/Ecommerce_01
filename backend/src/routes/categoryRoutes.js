import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  addSubcategory,
  updateSubcategory,
  deleteSubcategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/create", createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

// SUBCATEGORY ROUTES
router.post("/:id/subcategories", addSubcategory);
router.put("/:id/subcategories/:subId", updateSubcategory);
router.delete("/:id/subcategories/:subId", deleteSubcategory);




export default router;


