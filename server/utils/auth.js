// require('dotenv').config();
// const jwt = require('jsonwebtoken');
// const secret = process.env.JWT_SECRET;
// const expiration = '30d';

// module.exports = {
//   authMiddleware: function ({ req }) {
//     let token = req.query.token || req.headers.authorization;

//     // If the authorization header is available, extract the actual token
//     if (token) {
//       token = token.split(' ').pop().trim();
//     }

//     // If there's a token, attempt to verify it
//     if (token) {
//       try {
//         const { data } = jwt.verify(token, secret, { maxAge: expiration });
//         req.user = data;
//       } catch (err) {
//         console.log('Token verification error:', err);
//         // throw new Error('Invalid token');
//       }
//     } else {
//         throw new Error('You must be logged in to access this!');
//       }

//     // Return the modified request object
//     return req;
//   },

//   signToken: function ({ email, name, _id }) {
//     const payload = { email, name, _id };
//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   },
// };



// const jwt = require('jsonwebtoken');

// const secret = 'mysecretssshhhhhhh';
// const expiration = '2h';

// module.exports = {
//   authMiddleware: function ({ req }) {
    
//     // Comment out the entire token verification process
    
//     let token = req.body.token || req.query.token || req.headers.authorization;
//     if (req.headers.authorization) {
//       token = token.split(' ').pop().trim();
//     }
//     if (!token) {
//       return req;
//     }
//     try {
//       const { data } = jwt.verify(token, secret, { maxAge: expiration });
//       req.user = data;
//     } catch (err) {
//       console.log('Token verification error:', err);
//       throw new Error('Invalid token');
//     }
    

//     // Add a dummy user since your resolvers might rely on it
//     req.user = {
//       email: "test@dummy.com",
//       name: "Dummy User",
//       _id: "123456"
//     };

//     return req;
//   },

//   signToken: function ({ email, name, _id }) {
//     const payload = { email, name, _id };
//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   },
// };


