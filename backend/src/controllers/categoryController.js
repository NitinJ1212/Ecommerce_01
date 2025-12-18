import Category from "../models/categoryModel.js";


export const createCategory = async (req, res) => {
  try {
    const { name, description, subcategories } = req.body; 

    if (!name) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const category = await Category.create({
      name,
      description,
      subcategories: subcategories || [],
    });

    res.status(201).json({
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// ---------------------------------------------------
// GET ALL CATEGORIES
// ---------------------------------------------------
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// ---------------------------------------------------
// GET SINGLE CATEGORY
// ---------------------------------------------------
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// ---------------------------------------------------
// UPDATE CATEGORY
// ---------------------------------------------------
export const updateCategory = async (req, res) => {
  try {
    const { name, description, subcategories } = req.body;

    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description, subcategories },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// ---------------------------------------------------
// DELETE CATEGORY
// ---------------------------------------------------
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};





// ===================================================================
//               SUBCATEGORY CONTROLLERS
// ===================================================================


// ---------------------------------------------------
// ADD SUBCATEGORY TO CATEGORY
// ---------------------------------------------------
export const addSubcategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Subcategory name is required" });
    }

    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    category.subcategories.push({ name, description });
    await category.save();

    res.status(201).json({
      message: "Subcategory added successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// ---------------------------------------------------
// UPDATE SUBCATEGORY
// ---------------------------------------------------
export const updateSubcategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });

    const sub = category.subcategories.id(req.params.subId);
    if (!sub) return res.status(404).json({ message: "Subcategory not found" });

    if (name) sub.name = name;
    if (description) sub.description = description;

    await category.save();

    res.status(200).json({
      message: "Subcategory updated successfully",
      subcategory: sub,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// ---------------------------------------------------
// DELETE SUBCATEGORY
// ---------------------------------------------------
export const deleteSubcategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) return res.status(404).json({ message: "Category not found" });

    const sub = category.subcategories.id(req.params.subId);
    if (!sub) return res.status(404).json({ message: "Subcategory not found" });

    sub.deleteOne();
    await category.save();

    res.status(200).json({ message: "Subcategory deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
