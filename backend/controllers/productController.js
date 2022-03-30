const asyncHandler = require('express-async-handler');

// @desc     Get products
// @route    GET /api/products
// @access   Private
const getProducts = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ msg: 'Get products' });
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
