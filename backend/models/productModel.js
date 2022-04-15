const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  urlName: {
    type: String,
    required: [true, 'Please add a text value'],
  },

  item: {
    type: String,
    // required: [true, 'Please add a text value'],
  },

  image: {
    type: String,
    // required: [true, 'Please add a text value'],
  },

  price: {
    type: Number,
    // required: [true, 'Please add a text value'],
  },

  description: {
    type: String,
    // required: [true, 'Please add a text value'],
  },
  featured: {
    type: Boolean,
    // required: [true, 'Please true or false'],
  },
  qty: {
    type: Number,
    // required: [true, 'Please add a number value'],
  },
  productInStock: {
    type: Number,
    // required: [true, 'Please add a number value'],
  }

}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);

// If you use this app with a front-end that needs id field instead of _id, 
// you have to override toJSON method that map default object to a custom object. 
// So the Mongoose model could be modified as following code:

// module.exports = mongoose => {
//   var schema = mongoose.Schema(
//     {
//       title: String,
//       description: String,
//       published: Boolean
//     },
//     { timestamps: true }
//   );
//   schema.method("toJSON", function() {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
//   });
//   const Tutorial = mongoose.model("tutorial", schema);
//   return Tutorial;
// };