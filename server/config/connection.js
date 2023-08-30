const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/furryfeetdesigns');

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('An error occurred!', error);
});

db.once('open', () => {
    console.log('Database connected successfully!');
});

module.exports = db;


// module.exports = mongoose.connection;
