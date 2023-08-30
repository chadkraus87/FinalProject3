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
      user
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


const ORDERS_QUERY = gql`
  query GetUserOrders($uid: Int!) {
    orders(uid: $uid) {
      id
      name
      description
      price
    }
  }
`;

const PROFILE_QUERY = gql`
  query Profile($uid: Int!) {
    profile(uid: $uid) {
      _id
      name
      email
      password
    }
  }
`;

export { GET_PRODUCT_DETAILS, GET_ALL_PRODUCT_IDS, ORDERS_QUERY, PROFILE_QUERY};
