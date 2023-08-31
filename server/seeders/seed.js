const db = require('../config/connection');
const { User, Product, Review, Order } = require('../models');

// Importing all JSON files
const productSeeds = require('./productSeeds.json');
const reviewSeeds = require('./reviews.json');
const augustOrders = require('./AugustOrders.json');
const julyOrders = require('./JulyOrders.json');
const juneOrders = require('./JuneOrders.json');
const mayOrders = require('./MayOrders.json');
const users = require('./users.json');

db.once('open', async () => {
  try {
    // Deleting all existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    await Review.deleteMany({});
    await Order.deleteMany({});

    // Inserting new data
    await User.insertMany(users);
    await Product.insertMany(productSeeds);
    await Review.insertMany(reviewSeeds);
    await Order.insertMany([...augustOrders, ...julyOrders, ...juneOrders, ...mayOrders]);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
