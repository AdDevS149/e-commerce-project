const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  { urlName: String, item: String, image: String, price: Number, description: String, featured: Boolean, qty: Number, productInStock: Number },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
