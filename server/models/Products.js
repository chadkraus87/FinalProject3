const { Schema, model } = require('mongoose');

//Added the review schema
const reviewSchema = new Schema({
  name: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
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

const productSchema = new Schema({
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

const Product = model('Product', productSchema);
const Review = model('Review', reviewSchema);
.
module.exports = {
  Product,
  Review
};


