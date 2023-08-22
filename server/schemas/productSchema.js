const { gql } = require('apollo-server-express');

const productSchema = gql`
  type Product {
    _id: ID!
    productType: String!
    animalType: String!
    color: String!
  }

  input CreateProductInput {
    productType: String!
    animalType: String!
    color: String!
  }

  extend type Query {
    getProduct(_id: ID!): Product
    getAllProducts: [Product]
  }

  extend type Mutation {
    createProduct(input: CreateProductInput!): Product
  }
`;

module.exports = productSchema;
