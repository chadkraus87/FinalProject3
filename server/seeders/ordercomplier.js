// const fs = require('fs');

// const filesToCombine = [
//     'AugustOrders.json',
//     'JulyOrders.json',
//     'JuneOrders.json',
//     'MayOrders.json'
// ];

// let combinedOrders = [];

// filesToCombine.forEach(filePath => {
//     try {
//         const rawData = fs.readFileSync(filePath, 'utf-8');
//         const ordersData = JSON.parse(rawData);
//         combinedOrders = combinedOrders.concat(ordersData); // combine the data
//     } catch (error) {
//         console.error(`Error reading file ${filePath}: ${error.message}`);
//     }
// });

// // Write the combined data to orders.json
// try {
//     fs.writeFileSync('orders.json', JSON.stringify(combinedOrders, null, 2));
//     console.log('Combined data written to orders.json');
// } catch (error) {
//     console.error(`Error writing to orders.json: ${error.message}`);
// }
