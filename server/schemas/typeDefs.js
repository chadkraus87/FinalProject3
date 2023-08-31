const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID!
    name: String!
    animalType: String!
    sizes: [String!]!
    colors: [String!]!
    description: String!
    model: String
    price: Float!
    reviews: [Review]
  }

  type Review {
    name: User!
    rating: Float!
    text: String
    date: String!
    ReviewReply: [ReviewReply]
  }
  
  type ReviewReply {
    adminId: ID!
    reviewId: ID!
    text: String!
    date: String!
  }

  type User {
    _id: ID
    name: String
    email: String
    password: String
    isAdmin: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Order {
    _id: ID!
    userId: ID!
    invoiceAmount: Float!
    status: String!
    date: String!
    products: [OrderedProduct]!
  }
  
  type OrderedProduct {
    product: Product!
    quantity: Int!
  }

  type Message {
    _id: ID!
    user: User!
    subject: String!
    content: String!
    date: String!
  }

  type MessageReply {
    adminId: ID!
    messageId: ID!
    content: String!
    date: String!
  }

  type Task {
    id: ID!
    text: String!
    completed: Boolean!
  }

  input OrderedProductInput {
   productId: ID!
   quantity: Int!
 }

  type Query {
    getOrdersByUser(userId: ID!): [Order!]!
    getAllUsers: [User!]!
    adminGetAllOrders: [Order!]!
    isAdmin: Boolean
    userById(userId: ID!): User
    getUserProfile: User
    productById(_id: ID!): Product
    getAllProducts: [Product!]!
    orderById(_id: ID!): Order
    getAllOrders: [Order!]!
    getAllMessages: [Message!]!
    getAllReviews: [Review!]!
    reviewById(id: ID!): Review
    tasks: [Task!]!
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  logout: Boolean
  updateUser(name: String, email: String, password: String, , isAdmin: Boolean): User
  removeUser: User
  
  createProduct(
    name: String!, 
    animalType: String!, 
    size: String!, 
    color: String!, 
    description: String!, 
    model: String, 
    price: Float!
  ): Product

  editProduct(
    id: ID!, 
    name: String, 
    animalType: String, 
    size: String, 
    color: String, 
    description: String, 
    model: String, 
    price: Float
  ): Product
  
  addOrder(
    invoiceAmount: Float!, 
    status: String!, 
    products: [OrderedProductInput!]!
  ): Order

  addMessage(userId: ID!, subject: String!, content: String!): Message
  replyToMessage(messageId: ID!, content: String!): MessageReply
  createReviewReply(reviewId: ID!, text: String!): ReviewReply  
  updateReviewReply(id: ID!, text: String!): ReviewReply        
  deleteReviewReply(id: ID!): ID
  addTask(text: String!): Task
  deleteTask(id: ID!): ID
  toggleTaskCompletion(id: ID!): Task

 
  }
  

    type Subscription {
      messageCreated(topic: String!, userId: ID): Message
    }
  
`;

module.exports = typeDefs;

//  # input CreateProductInput {
//   #   name: String!
//   #   animalType: String!
//   #   size: String!
//   #   color: String!
//   #   description: String!
//   #   model: String
//   #   price: Float!
//   # }

//   # input EditProductInput {
//   #   id: ID!
//   #   name: String
//   #   animalType: String
//   #   size: String
//   #   color: String
//   #   description: String
//   #   threedModel: String
//   #   price: Float
//   # }

//   # input AddUserInput {
//   #   name: String!
//   #   email: String!
//   #   password: String!
//   # }

//   # input OrderedProductInput {
//   #   productId: ID!
//   #   quantity: Int!
//   # }
  
//   # input AddOrderInput {
//   #   invoiceAmount: Float!
//   #   status: String!
//   #   products: [OrderedProductInput!]!
//   # }
//    # addUser(name: String!, email: String!, password: String!): Auth
//     # login(email: String!, password: String!): Auth
//     # removeUser: User
//     # createProduct(input: CreateProductInput!): Product
//     # editProduct(input: EditProductInput!): Product
//     # addOrder(input: AddOrderInput!): Order
//     # addMessage(userId: ID!, subject: String!, content: String!): Message
//     # replyToMessage(messageId: ID!, content: String!): MessageReply
//     # createReviewReply(reviewId: ID!, text: String!): ReviewReply  
//     # updateReviewReply(id: ID!, text: String!): ReviewReply        
//     # deleteReviewReply(id: ID!): ID
//     # addTask(text: String!): Task
//     # deleteTask(id: ID!): ID
//     # toggleTaskCompletion(id: ID!): Task