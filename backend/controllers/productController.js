const asyncHandler = require('express-async-handler');
// const mongoose = require('mongoose')

const Product = require('../models/productModel');

// @route    POST /api/products (Send new product)
const setProduct = asyncHandler(async (req, res) => {
  if (!req.body) {
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

// GET /api/products (Get all products)
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ products });
});

// GET /api/products/:id  (Get one product)
const getOneProduct = asyncHandler(async (req, res) => {
  const oneProduct = await Product.findById(req.params.id, req.body, { new: true });

  res.status(200).json(oneProduct);
});

// @route    PUT /api/products/:id (update)
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error('Not a valid product');
  }
  const updatedProduct = await Product.findById(req.params.id, req.body, { new: true });

  res.status(200).json(updatedProduct);
});

// @route    DELETE /api/products/:id (Delete one)
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error('Product does not exist');
  }
  await Product.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getProducts,
  getOneProduct,
  setProduct,
  updateProduct,
  deleteProduct,
};
