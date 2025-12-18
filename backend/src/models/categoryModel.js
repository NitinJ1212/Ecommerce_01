import mongoose from "mongoose";






const SubcategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String
}, { _id: true });






const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    subcategories: [SubcategorySchema]
});

// module.exports = mongoose.models.Category || mongoose.model('Category', CategorySchema);
const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);
export default Category;