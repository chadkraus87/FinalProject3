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
    name: Profile!
    rating: Float!
    text: String
    date: String!
    replies: [Reply]
  }
  
  type Reply {
    id: ID!
    reviewId: ID!
    text: String!
    date: String!
  }

  type Profile {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Order {
    _id: ID!
    products: [Product]!
    orderDate: String!
    status: String!
    invoiceAmount: Float!
    email: String!
    ProfileId: ID!
  }

  type Message {
    _id: ID!
    name: Profile!
    subject: String!
    content: String!
    date: String!
  }

  type Task {
    id: ID!
    text: String!
    completed: Boolean!
  }

  input CreateProductInput {
    name: String!
    animalType: String!
    size: String!
    color: String!
    description: String!
    threedModel: String
    price: Float!
  }

  type Query {
    isAdmin: Boolean
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
    getProduct(_id: ID!): Product
    getAllProducts: [Product]
    getOrder(_id: ID!): Order
    getAllOrders: [Order]
    messages: [Message]!
    getAllReviews: [Review]
    getReviewById(id: ID!): Review
    getTasks: [Task]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMessage(userId: ID!, subject: String!, content: String!): Message
    removeProfile: Profile
    createProduct(productdata: CreateProductInput!): Product
    createReply(reviewId: ID!, text: String!): Reply  
    updateReply(id: ID!, text: String!): Reply        
    deleteReply(id: ID!): ID 
    addTask(text: String!): Task
    deleteTask(id: ID!): String
    toggleTask(id: ID!): Task
  }

    type Subscription {
      messageCreated: Message
    }
  
`;

module.exports = typeDefs;
