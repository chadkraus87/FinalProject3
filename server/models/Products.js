const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productType: {
    type: String,
    required: true,
  },
  animalType: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    required: true,
  },
  color: {
    type: String,
    enum: ['yellow', 'black', 'purple', 'pink', 'blue'],
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
