const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const products = require('../../data');

router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {
  const newProduct = {
    id: uuid.v4(),
    urlName: req.body.urlName,
    item: req.body.item,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description,
    featured: req.body.featured,
    qty: req.body.qty,
    productInStock: req.body.productInStock,
  };

  // Validation
  if (!newProduct.urlName || !newProduct.item || !newProduct.image || !newProduct.price || !newProduct.description || !newProduct.qty || !newProduct.productInStock) {
    return res.status(400).json({ msg: 'Product not added successfully' });
  }
  products.push(newProduct);
  res.json(products);
});

router.put('/:id', (req, res) => {
  const prodToUpdate = products.find((product) => product.id === parseInt(req.params.id));
  updateProduct = req.body;
  products.forEach((product) => {
    if (product.id === parseInt(req.params.id)) {
      product.item = updateProduct.item ? updateProduct.item : updateProduct.title;
      product.description = updateProduct.description ? updateProduct.description : updateProduct.description;

      res.json({ msg: 'Member successfully updated', products });
    }
  });
  if (prodToUpdate) {
    res.json(products.filter((product) => product.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No product found with an id of ${req.params.id}` });
  }
});

router.delete('/:id', (req, res) => {
  const prodToDelete = products.find((product) => product.id === parseInt(req.params.id));

  if (prodToDelete) {
    res.json({ msg: 'Product successfully deleted!', products: products.filter((product) => product.id !== parseInt(req.params.id)) });
  } else {
    res.status(400).json({ msg: `No member found with an id of ${req.params.id}` });
  }
});

module.exports = router;
