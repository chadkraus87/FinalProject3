// Import required modules from mongoose
const { Schema, model } = require('mongoose');

// Define the product schema
const productSchema = new Schema({
  productType: {
    type: String,
    required: true,
    trim: true,
  },
  animalType: {
    type: String,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
});

// Create a Product model using the schema
const Product = model('Product', productSchema);

// Export the Product model
module.exports = Product;
