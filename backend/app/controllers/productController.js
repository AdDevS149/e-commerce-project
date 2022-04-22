const asyncHandler = require('express-async-handler');
// const mongoose = require('mongoose')

const Product = require('../models/productModel');

// Create Products  // POST / api/products
const createProduct = asyncHandler(async (req, res) => {
  if (!req.body.urlName) {
    res.status(400);
    throw new Error('Text field needed');
  }

  const product = await Product.create({
    urlName: req.body.urlName,
    item: req.body.item,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description,
    featured: req.body.featured,
    qty: req.body.qty,
    productInStock: req.body.productInStock,
  });
  res.status(200).json(product);
});

// Retrieve all products  GET/ api/products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
});

//   // Retrieve all published Tutorials
//   router.get("/published", products.findAllPublished);

// Find one product
//   // Retrieve a single Tutorial with id


const findOneProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error('Product not found');
  }
  await Product.findOne();
  res.status(200).json(product);
});

// @desc    Update products
// @route   PUT /api/products/:id
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error('Not a valid product');
  }
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json(updatedProduct);
});

// @desc    Delete products
// @route   DELETE /api/products
// @access  Private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);


  console.log('The product is')
  console.log(product)

  if (!product) {
    res.status(400);
    throw new Error('Product does not exist');
  }
  await Product.deleteOne({ _id: product._id });

  res.status(200).json({ message: 'Product Successfully Deleted' });
});

//   router.delete("/", products.deleteAll);
//   app.use('/api/p', router);
// };

module.exports = {
  getProducts,
  findOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

// module.exports = app => {
//   const products = require("../controllers/productController");
//   var router = require("express").Router();

//   // Delete a Tutorial with id
//   router.delete("/:id", products.delete);
//   // Create a new Tutorial
