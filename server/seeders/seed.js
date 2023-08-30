const db = require('../config/connection');
const { User } = require('../models');
const { Product } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Product.deleteMany({});
    await User.insertMany(userSeeds);
    await Product.insertMany(productSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
