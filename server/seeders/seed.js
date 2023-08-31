const { spawn } = require('child_process');
const db = require('../config/connection');
const { User, Product, Review, Order } = require('../models');

const productSeeds = require('./productSeeds.json');  // Assuming productSeeds.json is still used for products

const runSeedFile = (fileName) => {
  return new Promise((resolve, reject) => {
    const process = spawn('node', [`seeders/create/${fileName}.js`]);
    process.stdout.on('data', data => console.log(`stdout: ${data}`));
    process.stderr.on('data', data => console.error(`stderr: ${data}`));
    process.on('close', (code) => {
      if(code === 0) {
        resolve();
      } else {
        reject(new Error(`${fileName} failed`));
      }
    });
  });
};

db.once('open', async () => {
  try {
    // Deleting all existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    await Review.deleteMany({});
    await Order.deleteMany({});

    console.log('Deleted all existing data in MongoDB.');

    // Seed Products First
    await Product.insertMany(productSeeds);
    console.log('Product data seeded.');

    // Running other seed files
    await runSeedFile('user');
    await runSeedFile('orders');
    await runSeedFile('reviews');

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});






// const db = require('../config/connection');
// const { User, Product, Review, Order } = require('../models');

// // Importing all JSON files
// const productSeeds = require('./productSeeds.json');
// const reviewSeeds = require('./reviews.json');
// const augustOrders = require('./AugustOrders.json');
// const julyOrders = require('./JulyOrders.json');
// const juneOrders = require('./JuneOrders.json');
// const mayOrders = require('./MayOrders.json');
// const users = require('./users.json');

// db.once('open', async () => {
//   try {
//     // Deleting all existing data
//     await User.deleteMany({});
//     await Product.deleteMany({});
//     await Review.deleteMany({});
//     await Order.deleteMany({});

//     // Inserting new data
//     await User.insertMany(users);
//     await Product.insertMany(productSeeds);
//     await Review.insertMany(reviewSeeds);
//     await Order.insertMany([...augustOrders, ...julyOrders, ...juneOrders, ...mayOrders]);

//     console.log('all done!');
//     process.exit(0);
//   } catch (err) {
//     throw err;
//   }
// });
