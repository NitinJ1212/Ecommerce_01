import Product from "../models/productModel.js";
import User from "../models/userModel.js";

// ------------------------------
// CREATE PRODUCT
// ------------------------------
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, brand, stock, images } = req.body;

    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      brand,
      stock,
      images,
      createdBy: req.user?._id || null,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------------------
// GET ALL PRODUCTS
// ------------------------------
export const getAllProducts = async (req, res) => {
  console.log("0000000000000000000000000")
  try {
    const products = await Product.find();
    res.status(200).json({ count: products.length, products });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------------------
// GET PRODUCT BY ID
// ------------------------------
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------------------
// ADD / UPDATE PRODUCT REVIEW
// ------------------------------
export const addProductReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const { productId } = req.params;
    const userId = req.user?._id || req.body.userId; // fallback for testing

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Check if user already reviewed
    const existingReview = product.reviews.find(
      (rev) => rev.user.toString() === userId.toString()
    );

    if (existingReview) {
      // Update existing review
      existingReview.rating = rating;
      existingReview.comment = comment;
    } else {
      // Add new review
      product.reviews.push({
        user: userId,
        name: user.name,
        rating,
        comment,
      });
    }

    // Recalculate average rating
    product.updateAverageRating();
    await product.save();

    res.status(200).json({
      message: "Review added successfully",
      ratings: product.ratings,
      numOfReviews: product.numOfReviews,
      reviews: product.reviews,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------------------
// CREATE DUMMY PRODUCTS (Seeder)
// ------------------------------


export const createDummyProducts = async (req, res) => {
  try {
    const dummyProducts = [
      {
        name: "Apple MacBook Air M2",
        description: "Powerful and lightweight laptop with M2 chip",
        price: 114999,
        category: "Electronics",
        sub_category: "Laptops",
        brand: "Apple",
        stock: 15,
        sold: 9,
        ratings: 4.8,
        numOfReviews: 12,
        images: [{ url: "https://via.placeholder.com/300x300?text=MacBook+Air" }],
      },
      {
        name: "Dell Inspiron 15",
        description: "Everyday performance laptop",
        price: 58999,
        category: "Electronics",
        sub_category: "Laptops",
        brand: "Dell",
        stock: 30,
        sold: 18,
        ratings: 4.2,
        numOfReviews: 8,
        images: [{ url: "https://via.placeholder.com/300x300?text=Dell+Inspiron" }],
      },
      {
        name: "iPhone 15",
        description: "Latest Apple smartphone with advanced camera",
        price: 79999,
        category: "Electronics",
        sub_category: "Mobiles",
        brand: "Apple",
        stock: 25,
        sold: 20,
        ratings: 4.7,
        numOfReviews: 15,
        images: [{ url: "https://via.placeholder.com/300x300?text=iPhone+15" }],
      },
      {
        name: "Samsung Galaxy S23",
        description: "Premium Android smartphone",
        price: 69999,
        category: "Electronics",
        sub_category: "Mobiles",
        brand: "Samsung",
        stock: 20,
        sold: 14,
        ratings: 4.5,
        numOfReviews: 10,
        images: [{ url: "https://via.placeholder.com/300x300?text=Galaxy+S23" }],
      },
      {
        name: "Sony WH-1000XM5",
        description: "Noise cancelling wireless headphones",
        price: 29999,
        category: "Electronics",
        sub_category: "Headphones",
        brand: "Sony",
        stock: 40,
        sold: 25,
        ratings: 4.9,
        numOfReviews: 22,
        images: [{ url: "https://via.placeholder.com/300x300?text=Sony+Headphones" }],
      },
      {
        name: "Men Cotton T-Shirt",
        description: "Comfortable cotton t-shirt",
        price: 799,
        category: "Fashion",
        sub_category: "Men",
        brand: "Roadster",
        stock: 100,
        sold: 60,
        ratings: 4.1,
        numOfReviews: 30,
        images: [{ url: "https://via.placeholder.com/300x300?text=Mens+Tshirt" }],
      },
      {
        name: "Women Kurti",
        description: "Stylish ethnic wear",
        price: 1299,
        category: "Fashion",
        sub_category: "Women",
        brand: "Biba",
        stock: 80,
        sold: 45,
        ratings: 4.3,
        numOfReviews: 25,
        images: [{ url: "https://via.placeholder.com/300x300?text=Women+Kurti" }],
      },
      {
        name: "Running Shoes",
        description: "Lightweight running shoes",
        price: 3499,
        category: "Fashion",
        sub_category: "Footwear",
        brand: "Nike",
        stock: 50,
        sold: 33,
        ratings: 4.6,
        numOfReviews: 18,
        images: [{ url: "https://via.placeholder.com/300x300?text=Running+Shoes" }],
      },
      {
        name: "Mixer Grinder",
        description: "500W powerful mixer grinder",
        price: 2499,
        category: "Home",
        sub_category: "Kitchen",
        brand: "Philips",
        stock: 35,
        sold: 22,
        ratings: 4.4,
        numOfReviews: 16,
        images: [{ url: "https://via.placeholder.com/300x300?text=Mixer" }],
      },
      {
        name: "Non-Stick Cookware Set",
        description: "5 piece cookware set",
        price: 1999,
        category: "Home",
        sub_category: "Kitchen",
        brand: "Prestige",
        stock: 40,
        sold: 28,
        ratings: 4.2,
        numOfReviews: 19,
        images: [{ url: "https://via.placeholder.com/300x300?text=Cookware" }],
      },
      {
        name: "Smart Watch",
        description: "Fitness smart watch",
        price: 4999,
        category: "Electronics",
        sub_category: "Wearables",
        brand: "Boat",
        stock: 60,
        sold: 40,
        ratings: 4.0,
        numOfReviews: 21,
        images: [{ url: "https://via.placeholder.com/300x300?text=Smart+Watch" }],
      },
      {
        name: "Bluetooth Speaker",
        description: "Portable speaker with deep bass",
        price: 2999,
        category: "Electronics",
        sub_category: "Audio",
        brand: "JBL",
        stock: 55,
        sold: 36,
        ratings: 4.5,
        numOfReviews: 20,
        images: [{ url: "https://via.placeholder.com/300x300?text=Speaker" }],
      },
      {
        name: "Office Chair",
        description: "Ergonomic office chair",
        price: 6999,
        category: "Furniture",
        sub_category: "Office",
        brand: "Green Soul",
        stock: 20,
        sold: 11,
        ratings: 4.3,
        numOfReviews: 9,
        images: [{ url: "https://via.placeholder.com/300x300?text=Office+Chair" }],
      },
      {
        name: "Study Table",
        description: "Wooden study table",
        price: 5999,
        category: "Furniture",
        sub_category: "Home",
        brand: "Ikea",
        stock: 15,
        sold: 7,
        ratings: 4.1,
        numOfReviews: 6,
        images: [{ url: "https://via.placeholder.com/300x300?text=Study+Table" }],
      },
      {
        name: "Backpack",
        description: "Water resistant backpack",
        price: 1499,
        category: "Accessories",
        sub_category: "Bags",
        brand: "Wildcraft",
        stock: 70,
        sold: 50,
        ratings: 4.4,
        numOfReviews: 27,
        images: [{ url: "https://via.placeholder.com/300x300?text=Backpack" }],
      },
      {
        name: "Power Bank",
        description: "20000mAh fast charging power bank",
        price: 1799,
        category: "Electronics",
        sub_category: "Accessories",
        brand: "Mi",
        stock: 90,
        sold: 65,
        ratings: 4.6,
        numOfReviews: 35,
        images: [{ url: "https://via.placeholder.com/300x300?text=Power+Bank" }],
      },
    ];

    // OPTIONAL: clear existing products
    // await Product.deleteMany();

    const createdProducts = await Product.insertMany(dummyProducts);

    res.status(201).json({
      success: true,
      message: "Dummy products created successfully",
      count: createdProducts.length,
      products: createdProducts,
    });
  } catch (error) {
    console.error("Error seeding dummy products:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};






// ===============================
// GET ALL PRODUCTS (Tab 1)


// ===============================
// NEW ARRIVALS (Latest products)
// ===============================
export const getNewArrivals = async (req, res) => {
  try {
    const products = await Product.find()
      .sort({ createdAt: -1 })
      .limit(8);

    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ===============================
// FEATURED PRODUCTS (High rating)
// ===============================
export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({ ratings: { $gte: 4 } })
      .sort({ ratings: -1 });

    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ===============================
// TOP SELLING PRODUCTS
// ===============================
export const getTopSellingProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .sort({ sold: -1 })
      .limit(8);

    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const filterProducts = async (req, res) => {
  console.log("q111111111111111=============================")
  try {
    const { category, brand, minPrice, maxPrice, date } = req.body;

    let filter = {};
    console.log(category, brand, minPrice, maxPrice, date);

    if (category) filter.category = category;
    if (brand) filter.brand = brand;

    if (minPrice > 0 || maxPrice > 0) {
      filter.price = {};
      if (minPrice !== undefined) filter.price.$gte = minPrice;
      if (maxPrice !== undefined) filter.price.$lte = maxPrice;
    }
    console.log(filter, "=============================")
    let query = Product.find(filter).limit(5);

    // latest products by date
    if (date) {
      query = query.sort({ createdAt: -1 });
    }
    // console.log(query, "query jjjjjjjjjjjjjjjjjjjjjjj")

    const products = await query;

    res.status(200).json(products);
  } catch (error) {
    console.log("--------------------222222222222", error)
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
export const filterProduct2s = async (req, res) => {
  console.log("0000000000000000000000000")
  try {
    const products = await Product.find();
    res.status(200).json({ count: products.length, products });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};