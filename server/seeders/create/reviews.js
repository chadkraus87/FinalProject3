const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://127.0.0.1:27017/furryfeetdesigns";

async function generateReviewData() {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();

    const users = await client.db("furryfeetdesigns").collection("users").find().toArray();
    const products = await client.db("furryfeetdesigns").collection("products").find().toArray();

    const reviewTexts = [
        "Great product!",
                "It is a fun thought to have clothing for animals.",
                "It's okay, but I've seen better.",
                "Would definitely recommend!",
                "My furbaby seems happy.",
                "Wish I had found these sooner!",
                "Oh what fun me and the furbaby have."
            ];

    const reviews = [];

    for (let i = 1; i <= 100; i++) {
        const product = products[Math.floor(Math.random() * products.length)];
        const user = users[Math.floor(Math.random() * users.length)];

        const rating = (Math.random() * 4 + 1).toFixed(1); // Random rating between 1.0 to 5.0
        const text = reviewTexts[Math.floor(Math.random() * reviewTexts.length)];
        const date = new Date(2022, 0, 1 + Math.floor(Math.random() * (365 + 1))).toISOString().split("T")[0];

        const review = {
            productId: product._id,
            userId: user._id,
            rating: parseFloat(rating),
            text,
            date
        };

        reviews.push(review);
    }

    await client.db("furryfeetdesigns").collection("reviews").insertMany(reviews);
    
    await client.close();
}

generateReviewData();





// const reviewLoops = 100;

// const fs = require('fs');
// const path = require('path');

// const productSeedsPath = path.join(__dirname, '../productSeeds.json');
// const products = JSON.parse(fs.readFileSync(productSeedsPath, 'utf-8'));

// const userSeedsPath = path.join(__dirname, '../users.json');
// const users = JSON.parse(fs.readFileSync(userSeedsPath, 'utf-8'));
// console.log('Loaded users:', users);

// const reviewSeedsPath = path.join(__dirname, '../reviews.json');

// function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }



// function generateReviewData() {
//     const reviewTexts = [
//         "Great product!",
//         "It is a fun thought to have clothing for animals.",
//         "It's okay, but I've seen better.",
//         "Would definitely recommend!",
//         "My furbaby seems happy."
//     ];
    
//     const reviews = [];

//     for (let i = 1; i <= reviewLoops; i++) {
//         const productIndex = Math.floor(Math.random() * products.length);
//         const userIndex = Math.floor(Math.random() * users.length); // Random user index
//         const user = users[userIndex];

//         const rating = (Math.random() * 4 + 1).toFixed(1); // Generates a random rating between 1.0 to 5.0
//         const text = reviewTexts[Math.floor(Math.random() * reviewTexts.length)];
//         const date = randomDate(new Date(2022, 0, 1), new Date(2023, 11, 31)).toISOString().split("T")[0]; 

//         const review = {
//             name: user._id,
//             rating: parseFloat(rating),
//             text,
//             date,
//             reviewReply: []
//         };
        
//         reviews.push(review);
//     }

//     fs.writeFileSync(reviewSeedsPath, JSON.stringify(reviews, null, 2));
// }

// generateReviewData();
