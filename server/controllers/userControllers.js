const asyncHandler = require('../middleware/asyncHandler.js');
const User = require('../models/User.js');
const generateToken = require('../utils/generateToken.js');


//description Auth user and get token
// route POST /api/users/login
// Public route
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))) {
        generateToken(res, user._id);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(401);
        throw new Error('Not authorized, invalid email or password');
    }
    
    }
);

//description Register user
// route POST /api/users
// Public route
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, isAdmin = false } = req.body;

    // Validation
    if (!email.match(/.+@.+\..+/)) {
        res.status(400);
        throw new Error('Invalid email format');
    }

    if (password.length < 5) {
        res.status(400);
        throw new Error('Password should have at least 5 characters');
    }

    const userExists = await User.findOne({ email });

    if(userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password,
        isAdmin  // Optional
    });

    if(user) {
        generateToken(res, user._id);
        
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

//description Logout user / clear cookie
// route POST /api/users/logout
// Private
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'Logged out successfully' });
    }
);

//description Get user profile
// route GET /api/users/profile
// Private route
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('User profile');
    }
);

//description update user profile
// route PUT /api/users/profile
// Private route
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile');
    }
);

//description Get all users
// route GET /api/users/users
// Private admin route
const getUsers = asyncHandler(async (req, res) => {
    res.send('get users');
    }
);

//description Get user by id
// route GET /api/users/:id
// Private/Admin route
const getUserById = asyncHandler(async (req, res) => {
    res.send('Get user by ID');
    }
);

//description delete
// route DELETE /api/users/:id
// Private route
const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user');
    }
);

//description update user
// route PUT /api/users/:id
// Private/admin route
const updateUser = asyncHandler(async (req, res) => {
    res.send('update user');
    }
);

module.exports = {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser,
};