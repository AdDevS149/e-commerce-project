const express = require('express');
const router = express.Router();
const { getProducts, getOneProduct, setProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.route('/').get(getProducts).post(setProduct);

router.route('/:id').get(getOneProduct).delete(deleteProduct).put(updateProduct);

module.exports = router;
