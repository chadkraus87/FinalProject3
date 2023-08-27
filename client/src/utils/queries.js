import { gql } from '@apollo/client';

const GET_PRODUCT_DETAILS = gql`
query GetProduct($id: ID!) {
  getProduct(_id: $id) {
    _id
    animalType
    colors
    description
    model
    name
    price
    sizes
    reviews {
      username
      rating
      text
      date
    }
  }
}
`;

const GET_ALL_PRODUCT_IDS = gql`
query GetAllProductIds {
  getAllProducts {
    _id
    name
  }
}
`;

export { GET_PRODUCT_DETAILS, GET_ALL_PRODUCT_IDS };
