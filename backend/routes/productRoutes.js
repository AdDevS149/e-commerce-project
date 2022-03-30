const express = require('express');
const router = express.Router();
const {getProducts, setProduct, updateProduct, deleteProduct} = require('../controllers/productController')


// Get All Products
router.route('/').get(getProducts).post(setProduct)

router.route('/:id').delete(deleteProduct).put(updateProduct)




// router.get('/', (req, res) => {
//   res.json({ items: products });
// });

// Get One Product
// router.get('/:id', (req, res) => {
//   const isProduct = products.some((product) => product.id === parseInt(req.params.id));
//   if (isProduct) {
//     res.json(products.filter((product) => product.id === parseInt(req.params.id)));
//   } else {
//     res.status(400).json({ msg: `No product with id of ${req.params.id}` });
//   }
// });

// Create Product
// router.post('/', (req, res) => {
//   const newProduct = {
//     id: uuid.v4(),
//     urlName: req.body.urlName,
//     item: req.body.item,
//     image: req.body.image,
//     price: req.body.price,
//     description: req.body.description,
//     featured: req.body.featured,
//     qty: req.body.qty,
//     productInStock: req.body.productInStock,
//   };
//   // Validation
//   if (!newProduct.urlName || !newProduct.item || !newProduct.image || !newProduct.price || !newProduct.description || !newProduct.featured || !newProduct.qty || !newProduct.productInStock) {
//     return res.status(400).json({ msg: 'Product not added successfully' });
//   }
//   products.push(newProduct);
//   res.json(products);
// });

// Update Product
// router.put('/:id', (req, res) => {
//   // Identify product that will be updated
//   const prodToUpdate = products.find((product) => product.id === parseInt(req.params.id));
//   //
//   const updatedProduct = products.map((product) => {
//     if (product.id === parseInt(req.params.id)) {
//       product = {
//         ...product,
//         ...req.body,
//       };
//     }
//     return product;
//   });
//   if (prodToUpdate) {
//     res.json({ products: updatedProduct });
//   } else {
//     res.status(400).json({ msg: `No product found with an id of ${req.params.id}` });
//   }
// });

//Delete Product
// router.delete('/:id', (req, res) => {
//   const prodToDelete = products.find((product) => product.id === parseInt(req.params.id));

//   if (prodToDelete) {
//     res.json({ msg: 'Product successfully deleted!', products: products.filter((product) => product.id !== parseInt(req.params.id)) });
//   } else {
//     res.status(400).json({ msg: `No member found with an id of ${req.params.id}` });
//   }
// });

module.exports = router;
