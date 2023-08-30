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
    user: String!
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
    userId: ID!
    products: [Product]!
    orderDate: String!
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
    isAdmin: Boolean!
    getOrder(_id: ID!): Order
    getAllOrders: [Order]
    getOrdersByUser(userId: ID!): [Order]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeProfile: Profile
    createProduct(productdata: CreateProductInput!): Product

    # You can add mutations related to orders here if needed
  }
`;

module.exports = typeDefs;

//backup of working file
// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type Product {
//     _id: ID!
//     name: String!
//     animalType: String!
//     sizes: [String!]!
//     colors: [String!]!
//     description: String!
//     model: String
//     price: Float!
//     reviews: [Review]
//   }

//   type Review {
//     user: String!
//     rating: Float!
//     text: String
//     date: String!
//   }
  

//   type Profile {
//     _id: ID
//     name: String
//     email: String
//     password: String
//   }

//   type Auth {
//     token: ID!
//     profile: Profile
//   }

//   type Order {
//     _id: ID!
//     products: [Product]!
//     orderDate: String!
//   }

//   input CreateProductInput {
//     productType: String!
//     animalType: String!
//     size: String!
//     color: String!
//     description: String!
//     threedModel: String
//     price: Float!
//   }

//   type Query {
//     profiles: [Profile]!
//     profile(profileId: ID!): Profile
//     me: Profile
//     getProduct(_id: ID!): Product
//     getAllProducts: [Product]
//     isAdmin: Boolean!
//     getOrder(_id: ID!): Order
//     getAllOrders: [Order]
//   }

//   type Mutation {
//     addProfile(name: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth

//     removeProfile: Profile
//     createProduct(productdata: CreateProductInput!): Product

//     # You can add mutations related to orders here if needed
//   }
// `;

// module.exports = typeDefs;
