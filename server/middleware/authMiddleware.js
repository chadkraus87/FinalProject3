const jwt = require('jsonwebtoken');
const User = require('../models/User');
const asyncHandler = require('../middleware/asyncHandler.js');

//Protect Routes
const protect = asyncHandler(async (req, res, next) => {
    let token; 

    token = req.cookies.jwt;

    if(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            console.log(error)
            res.status(401);
            throw new Error('Not authorized, token failed');
        }

    } else {
        res.status(401);
        throw new Error('Not authorized, token found');
    }
});

//Admin middleware
const admin = (req, res, next) => { 
    if(req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Not authorized as admin');
    }
};

module.exports = { protect, admin };
        