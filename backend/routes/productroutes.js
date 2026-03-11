const express = require("express");
const Product = require("../models/product");

const router = express.Router();

console.log("Product routes loaded"); 

// 🔹 GET single product by ID
router.get("/:id", async (req, res) => {
  console.log("Fetching product ID:", req.params.id); // Debug log

  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(400).json({ message: "Invalid product ID" });
  }
});

// 🔹 GET all products
router.get("/", async (req, res) => {
  console.log("Fetching all products");

  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// 🔹 POST a new product
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;