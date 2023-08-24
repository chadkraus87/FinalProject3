const { gql } = require('apollo-server-express');

const typeDefs = gql`
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

  type Product {
    _id: ID!
    productType: String
    animalType: String
    color: String
  }

  type Order {
    _id: ID!
    products: [Product]!
    orderDate: String!
  }

  input CreateProductInput {
    productType: String!
    animalType: String!
    color: String!
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data,
    # we can use a query that will always find and return the logged in user's data
    me: Profile
    getProduct(_id: ID!): Product
    getAllProducts: [Product]

    getOrder(_id: ID!): Order
    getAllOrders: [Order]
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
