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
    username: String!
    rating: Float!
    text: String
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
  }

  type Message {
    _id: ID!
    user: String!
    subject: String!
    content: String!
    date: String!
  }

  input CreateProductInput {
    productType: String!
    animalType: String!
    size: String!
    color: String!
    description: String!
    threedModel: String
    price: Float!
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
    getProduct(_id: ID!): Product
    getAllProducts: [Product]
    getOrder(_id: ID!): Order
    getAllOrders: [Order]
    messages: [Message]!
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMessage(user: String!, subject: String!, content: String!): Message
    removeProfile: Profile
    createProduct(productdata: CreateProductInput!): Product

    type Subscription {
      messageCreated: Message
    }
  }
`;

module.exports = typeDefs;
