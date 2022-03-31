const asyncHandler = require('express-async-handler');

// const Product = require('../models/productModel')

// @desc     Get products
// @route    GET /api/products
// @access   Private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Products.find();

  res.status(200).json(products);
});

// @desc     set product
// @route    POST /api/products
// @access   Private
const setProduct = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Text field needed');
  }
  res.status(200).json({ msg: 'Set products' });
});

// @desc     Update product
// @route    PUT /api/products/:id
// @access   Private
const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'Update products' });
});

// @desc     Delete product
// @route    DELETE /api/products/:id
// @access   Private
const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'Delete products' });
});

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
};
