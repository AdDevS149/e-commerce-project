const asyncHandler = require('express-async-handler');

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
  if (!req.body.text) {
    res.status(400);
    throw new Error('Text field needed');
  }

  const product = await Product.create({
    text: req.body.text
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
const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true
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
