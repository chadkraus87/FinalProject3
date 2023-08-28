const mongoose = require('mongoose');

//Added the review schema
const reviewSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const productSchema = new mongoose.Schema({
  //updated to name
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
    enum: ['yellow', 'black', 'purple', 'pink', 'blue'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  //changed name to model
  model: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  reviews: [reviewSchema],
});

//updated the export to be be an object. if we split this into 2 schemas the object will no longer need to be destructerd in  the index.
module.exports = {
  Product: mongoose.model('Product', productSchema),
  Review: mongoose.model('Review', reviewSchema)
};


