const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://127.0.0.1:27017/furryfeetdesigns";

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

async function generateSeedData(year, month) {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const products = await client.db("furryfeetdesigns").collection("products").find().toArray();
        const users = await client.db("furryfeetdesigns").collection("users").find().toArray();
        
        const statuses = ["pending", "shipped", "delivered"];
        const orders = [];

        for (let i = 1; i <= 100; i++) {
            const userId = users[Math.floor(Math.random() * users.length)]._id;
            const orderDate = randomDate(new Date(year, month - 1, 1), new Date(year, month, 0));
            
            const num_items = Math.floor(Math.random() * 4) + 1;
            const order_items = products.slice(0, num_items).map(product => ({
                productId: product._id,
                quantity: Math.floor(Math.random() * 11)
            }));
            
            const invoice_amount = order_items.reduce((sum, orderedProduct) => sum + ((orderedProduct.product?.price || 0) * orderedProduct.quantity), 0);

            
            const order = {
                userId,
                orderDate: orderDate.toISOString(),
                status: statuses[Math.floor(Math.random() * statuses.length)],
                products: order_items,
                invoice_amount: parseFloat(invoice_amount.toFixed(2))
            };

            orders.push(order);
        }

        await client.db("furryfeetdesigns").collection("orders").insertMany(orders);
        console.log("Orders seeded successfully");

    } catch (err) {
        console.error("An error occurred:", err);
    } finally {
        await client.close();
    }
}

// Generate seed data for multiple months
const year = 2023;
for (const month of [5, 6, 7, 8]) {  // May, June, July, August
    generateSeedData(year, month).catch(console.error);
}










 // Change this to make more or less data in the seed file
// const orderloops = 100;

// const fs = require('fs');
// const path = require('path');

// const productSeedsPath = path.join(__dirname, '../productSeeds.json');
// const products = JSON.parse(fs.readFileSync(productSeedsPath, 'utf-8'));
// const orderSeedsPath = path.join(__dirname, '../orderSeeds.json');

// function generateSeedData() {
//     const items = products.map(product => ({
//         name: product.name,
//         price: product.price
//     }));

//     const statuses = ["pending", "shipped", "delivered", "cancelled"];
//     const orders = [];

//     for (let i = 1; i <= orderloops; i++) {
//         const order_id = `ORD${i.toString().padStart(3, "0")}`;
//         //dont forget arrays are base zero. arg after year is month -1
//         const order_date = new Date(2023, 7, Math.floor(Math.random() * 31) + 1);
//         const status = statuses[Math.floor(Math.random() * statuses.length)];
//         const num_items = Math.floor(Math.random() * 4) + 1;
//         const order_items = items.slice(0, num_items).map(item => ({
//             product: item,
//             // Generate a random quantity of products between 0-10
//             quantity: Math.floor(Math.random() * 11)
//         }));
//         const invoice_amount = order_items.reduce((sum, orderedProduct) => sum + (orderedProduct.product.price * orderedProduct.quantity), 0);
//         const customer_email = `customer${i}@example.com`;

//         const order = {
//             order_id,
//             order_date: order_date.toISOString().split("T")[0],
//             status,
//             products: order_items,
//             invoice_amount: parseFloat(invoice_amount.toFixed(2)),
//             customer_email
//         };

//         orders.push(order);
//     }

//     // Saving to the file system
//     fs.writeFileSync(orderSeedsPath, JSON.stringify(orders, null, 2));

//     return orders;
// }

// generateSeedData();
