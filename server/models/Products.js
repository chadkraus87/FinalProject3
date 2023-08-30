const { Schema, model } = require('mongoose');
const Review = require('./Review');

const productSchema = new Schema({
  
  name: {
    type: String,
    required: true,
  },
  animalType: {
    type: String,
    required: true,
  },
  sizes: {
    type: [String],
    enum: ['small', 'medium', 'large'],
    required: true,
  },
  colors: {
    type: [String],
    enum: ['yellow', 'black', 'purple', 'pink', 'blue', 'red', 'green'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  
  model: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  reviews: [Review.schema],
});

const Product = model('Product', productSchema);


module.exports = Product;


