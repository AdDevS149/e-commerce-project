const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose')

const Product = require('../models/productModel')


// @desc     Get products
// @route    GET /api/products
// @access   Private
const getProducts = asyncHandler(async (req, res) => {
const products = await Product.find()

  res.status(200).json(products)
});

// @desc     set product
// @route    POST /api/products
// @access   Private
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
  })
  res.status(200).json(product);
});



// @desc     Update product
// @route    PUT /api/products/:id
// @access   Private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id)
if(!product) {
  res.status(400) 
  throw new Error("Not a valid product")
}
const updatedProduct = await Product.findById(req.params.id, req.body, {new: true
})

  res.status(200).json(updatedProduct);
});

// @desc     Delete product
// @route    DELETE /api/products/:id
// @access   Private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if(!product) {
    res.status(400) 
    throw new Error("Product does not exist")
  }
  await Product.deleteOne()


  res.status(200).json({ id: req.params.id});
});

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
};
