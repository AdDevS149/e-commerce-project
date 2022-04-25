const express = require('express');
const router = express.Router();
const { getProducts, findOneProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.route('/').get(getProducts).post(createProduct);

router.route('/:id').get(findOneProduct).delete(deleteProduct).put(updateProduct);

module.exports = router;
