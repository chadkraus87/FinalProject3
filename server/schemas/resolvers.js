const { PubSub, withFilter } = require("graphql-subscriptions") 
const {  User, Product, Review, Task, Message, Order } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { protect, isAdmin } = require('../utils/helpers');

const pubsub = new PubSub();
const MESSAGE_CREATED = 'MESSAGE_CREATED';


const resolvers = {
  Query: {
    getAllUsers: async (parent, args, context) => {
      protect(context);
      return User.find();
    
    },
    
    isAdmin: async (parent, args, context) => {
      protect(context);
      isAdmin(context);
      const user = await User.findOne({ _id: context.user._id });
      return user.isAdmin;
      
    },

    userById: async (parent, { userId }, context) => {
      protect(context);
      return User.findOne({ _id: userId });
     
    },

    getUserProfile: async (parent, args, context) => {
      protect(context);
      return User.findOne({ _id: context.user._id });
      
    },

    productById: async (parent, { _id }) => {
      try {
        const product = await Product.findOne({ _id });
        if (!product) {
          throw new Error('Product not found');
        }
        return product;
      } catch (error) {
        console.error("Error retrieving product:", error);
        throw new Error(`Unable to fetch the product: ${error.message}`);
      }
     
    },

    getAllProducts: async () => {
      try {
        const products = await Product.find();
        if (!products) {
          throw new Error('No Products found');
        } 
        return products;
      } catch (error) {
        console.error("Error retrieving products:", error);
        throw new Error(`Unable to fetch the products: ${error.message}`);
      }
    
    },

    getAllOrders: async (_, args, context) => {
      protect(context);
      isAdmin(context);
      return Order.find({});
      
    },

    getAllMessages: async (_, args, context) => {
      protect(context);
      isAdmin(context);
      return Message.find({});
     
    },
 
    getAllReviews: async () => {
      return Review.find();
    },
  
    reviewById: async (parent, { _id }) => {
      try {
        const review = await Review.findOne({_id});
        if (!review) {
          throw new Error('Review not found')
        }
        return review;
      } catch (error) {
        console.error("Error retrieving review:", error);
          throw new Error(`Unable to fetch the review: ${error.message}`);
      }
    
    },

    tasks: async (_, __, context) => {
      protect(context);
      isAdmin(context);
      const adminId = context.user.id;
      return await Task.find({ admin: adminId });
    },
    

  },



  Mutation: {
    addUser: async (parent, { name, email, password }) => {
    
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
          throw new Error("Email already in use");
      }
  
      const user = await User.create({ name, email, password });
      const token = generateToken(user);
  
      return { token, user };
  },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.matchPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = generateToken(user);
      return { token, user };
    },

    async logout(_, __, { res }) {
      res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
      });
      return true;
    },

    updateUser: async (_, { name, email, password, isAdmin  }, context) => {
        protect(context);
  
        const user = await User.findOneAndUpdate(
          { _id: id },
          { name, email, password, isAdmin },
          { new: true }
        );
        return user;
    },

    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    createProduct: async (_, { name, animalType, size, color, description, model, price }, context) => {
      protect(context);
      isAdmin(context);
      const product = await Product.create({ name, animalType, size, color, description, model, price });
      return product;
     
    },

    editProduct: async (_, { id, name, animalType, size, color, description, model, price }, context) => {
      protect(context);
      isAdmin(context);
      const product = await Product.findOneAndUpdate(
        { _id: id },
        { name, animalType, size, color, description, model, price },
        { new: true }
      );
      return product;
     
    },

    addOrder: async (_, { invoiceAmount, status, products }, context) => {
      protect(context);
      const newOrder = new Order({
        userId: context.user._id,
        invoiceAmount,
        status,
        products: products.map(p => ({ product: p.productId, quantity: p.quantity }))
      });
      return await newOrder.save();
      
    },
    
    addMessage: async (_, { userId, subject, content, date }, context) => {
      const message = new Message({ userId, subject, content, date });
      await message.save();
      pubsub.publish(MESSAGE_CREATED, { messageCreated: message });
      return message;
    },

    replyToMessage: async (parent, { messageId, content, date }, context) => {
    
      const message = await Message.findById(messageId);
      if (!message) {
        throw new Error('Message not found');
      }
    
      const reply = {
        adminId: context.user._id,
        content: content,
        date: date || Date.now()  
      };
    
      message.messageReply.push(reply);
      await message.save()
      return message;
    },

    createReviewReply: async (parent, { reviewId, text }, context) => {
      const review = await Review.findById(reviewId);
      if (!review) {
        throw new Error('Review not found');
      }
      const reply = {
        adminId: context.user._id, 
        text: text,
        date: Date.now()  
      };
    
      review.replies.push(reply);
      await review.save();
      return review;
    },

    updateReviewReply: async (parent, { id, text }, context) => {
      const updatedReview = await Review.findOneAndUpdate(
        { "replies._id": id }, 
        { "$set": { "replies.$.text": text } },
        { new: true }
      );
      if (!updatedReview) {
        throw new Error('Review reply not found');
      }
      return updatedReview;
    },

    deleteReviewReply: async (parent, { id }, context) => {
      const updatedReview = await Review.findOneAndUpdate(
        {}, 
        { "$pull": { "replies": { "_id": id } } },
        { new: true }
      );
      if (!updatedReview) {
        throw new Error('Review reply not found');
      }
      return id;
    },

    addTask: async (_, { text }, context) => {
      const adminId = context.user.id; 
      const task = new Task({ text, admin: adminId });
      await task.save();
      return task;
    },

    deleteTask: async (_, { id }) => {
      await Task.findByIdAndDelete(id);
      return "Task deleted successfully";
    },

    toggleTaskCompletion: async (_, { id }) => {
      const task = await Task.findById(id);
      task.completed = !task.completed;
      await task.save();
      return task;
    },

  },
    
    Subscription: {
      messageCreated: {
        subscribe: withFilter(
          () => pubsub.asyncIterator([MESSAGE_CREATED]),
          (payload, variables, context) => {
            return context.user.isAdmin; 
          }
        ),
      },
    },
  
};

module.exports = resolvers;


 // if (!context.user) {
      //   throw new AuthenticationError('You need to be logged in!');
      // }
      // return User.find();

       // if (!context.user) {
      //   throw new AuthenticationError('You need to be logged in!');
      // }
      // const user = await User.findOne({ _id: context.user._id });
      // return user.isAdmin;

// if (!context.user) {
      //   throw new AuthenticationError('You need to be logged in!');
      // }
      // return User.findOne({ _id: userId });

 // if (context.user) {
      //   return User.findOne({ _id: context.user._id });
      // }
      // throw new AuthenticationError('You need to be logged in!');

      // try {
      //   return Product.findOne({ _id });
      // } catch (error) {
      //   console.error("Error retrieving product:", error);
      //   throw new Error("Unable to fetch the product");
      // }

       //   return Product.find();
    // },
    // orderById: async (parent, { _id }) => {
    //   try {
    //     return Order.findOne({_id});
    //   } catch (error) {
    //     console.error("Error retrieving order:", error);
    //     throw new Error("Unable to fetch the order");
    //   }


      // if (!context.user) {
      //   throw new AuthenticationError("You must be logged in to view orders.");
      // }
    
      // try {
      //   if (context.user.isAdmin) {
      //     return Order.find({});
      //   }
      //   return Order.find({ userId: context.user._id }); 
      // } catch (error) {
      //   console.error("Error retrieving orders:", error);
      //   throw new Error("Unable to fetch orders");
      // }

// if (!context.user) {
      //   throw new AuthenticationError("You must be logged in to view messages.");
      // }
      // try {
      //   if (context.user.isAdmin) {
      //     return Message.find({});
      //   }
      //   return Message.find({ userId: context.user._id });
      // } catch (error) {
      //   console.error("Error retrieving messages:", error);
      //   throw new Error("Unable to fetch messages");
      // }

      // try {
      //   return Review.findOne({_id});
      // } catch (error) {
      //   console.error("Error retrieving review:", error);
      //   throw new Error("Unable to fetch the review");
      // }

      // const { name, email, password } = input;
      // Check if the email already exists

 // if (!context.user || !context.user.isAdmin) {
      //   throw new AuthenticationError('You need to be an admin to create a product!');
      // }
      // const product = await Product.create(productdata);
      // return product;

  // if (!context.user || !context.user.isAdmin) {
      //   throw new AuthenticationError('You need to be an admin to edit a product!');
      // }
      // const product = await Product.findOneAndUpdate({ _id: productdata._id }, productdata, { new: true });
      // return product;

 // if (!context.user) {
      //   throw new AuthenticationError('You must be logged in to place an order.');
      // }
    
      // const newOrder = new Order({
      //   userId: context.user._id,
      //   invoiceAmount: input.invoiceAmount,
      //   status: input.status,
      //   products: input.products.map(p => ({ product: p.productId, quantity: p.quantity }))
      // });
    
      // return await newOrder.save();

