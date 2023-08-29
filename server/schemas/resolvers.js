const { AuthenticationError } = require('apollo-server-express');
const { Profile, Product } = require('../models');
const { signToken } = require('../utils/generateToken');

const resolvers = {
  Query: {
    profiles: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
      return Profile.find();
    },
    
    isAdmin: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
      const user = await Profile.findOne({ _id: context.user._id });
      return user.isAdmin;
    },

    profile: async (parent, { profileId }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
      return Profile.findOne({ _id: profileId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    getProduct: async (parent, { _id }) => {
      try {
        return Product.findOne({ _id });
      } catch (error) {
        console.error("Error retrieving product:", error);
        throw new Error("Unable to fetch the product");
      }
    },

    getAllProducts: async () => {
      return Product.find();
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },

    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    createProduct: async (parent, { productdata }, context) => {
      if (!context.user || !context.user.isAdmin) {
        throw new AuthenticationError('You need to be an admin to create a product!');
      }
      const product = await Product.create(productdata);
      return product;
    },

    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;



// const { AuthenticationError } = require('apollo-server-express');
// const { Profile, Product } = require('../models');
// const { signToken } = require('../utils/auth');

// const resolvers = {
//   Query: {
//     profiles: async (parent, args, context) => {
//       if (!context.user) {
//         throw new AuthenticationError('You need to be logged in!');
//       }
//       return Profile.find();
//     },
    

//     profile: async (parent, { profileId }, context) => {
//       if (!context.user) {
//         throw new AuthenticationError('You need to be logged in!');
//       }
//       return Profile.findOne({ _id: profileId });
//     },
    

//     me: async (parent, args, context) => {
//       if (context.user) {
//         return Profile.findOne({ _id: context.user._id });
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },

//     getProduct: async (parent, { _id }) => {
//       try {
//         return Product.findOne({ _id });
//       } catch (error) {
//         console.error("Error retrieving product:", error);
//         throw new Error("Unable to fetch the product");
//       }
//     },
    

//     getAllProducts: async () => {
//       return Product.find();
//     }
//   },

//   Mutation: {
//     addProfile: async (parent, { name, email, password }) => {
//       const profile = await Profile.create({ name, email, password });
//       const token = signToken(profile);

//       return { token, profile };
//     },

//     login: async (parent, { email, password }) => {
//       const profile = await Profile.findOne({ email });

//       if (!profile) {
//         throw new AuthenticationError('No profile with this email found!');
//       }

//       const correctPw = await profile.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect password!');
//       }

//       const token = signToken(profile);
//       return { token, profile };
//     },

//     createProduct: async (parent, { productdata }) => {
//       const product = await Product.create(productdata);
//       return product;
//     },

//     removeProfile: async (parent, args, context) => {
//       if (context.user) {
//         return Profile.findOneAndDelete({ _id: context.user._id });
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },
//   },
// };

// module.exports = resolvers;
