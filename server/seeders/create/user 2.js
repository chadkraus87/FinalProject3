// const fs = require('fs');
// const path = require('path');
// const bcrypt = require('bcryptjs');
// const { v4: uuidv4 } = require('uuid'); // Import the UUID library

// const userSeedsPath = path.join(__dirname, '../users.json');

// const userLoops = 100;  

// async function hashPassword(password) {
//     const salt = await bcrypt.genSalt(10);
//     return bcrypt.hash(password, salt);
// }

// async function generateUserData() {
//     const users = [];


    
//     // Admin user
//     const hashedAdminPassword = await hashPassword('admin123');
//     users.push({
//         _id: uuidv4(), // Assign a unique ID for the admin
//         name: 'Admin',
//         email: 'admin@example.com',
//         password: hashedAdminPassword,
//         isAdmin: true
//     });

//     // Generate regular users
//     for (let i = 1; i <= userLoops; i++) {
//         const hashedPassword = await hashPassword(`user${i}pass`); 
//         const randomNum = Math.floor(Math.random() * 50) + 1;  // Generates a number between 1 and 50
//         const isAdmin = randomNum === 1;  // 2% chance

//         const user = {
//             _id: uuidv4(), // Assign a unique ID for each user
//             name: `User${i}`,
//             email: `user${i}@example.com`,
//             password: hashedPassword,
//             isAdmin
//         };

//         users.push(user);
//     }
//     fs.writeFileSync(userSeedsPath, JSON.stringify(users, null, 2));
// }

// generateUserData();
