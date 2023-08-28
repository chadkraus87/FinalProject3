const db = require('../config/connection');
const { Profile } = require('../models');
//added products to the seed
const { Product } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const productSeeds = require('./productSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Product.deleteMany({});
    await Profile.insertMany(profileSeeds);
    await Product.insertMany(productSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
