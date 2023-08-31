// const reviewLoops = 500;

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
//         "I didn't like this at all.",
//         "It's okay, but I've seen better.",
//         "Would definitely recommend!",
//         "It broke after a week."
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
