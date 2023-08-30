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


const GET_ORDERS_BY_USER = gql`
  query GetOrdersByUser($userId: ID!) {
    getOrdersByUser(userId: $userId) {
      _id
      products {
        name
        price
      }
      orderDate
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

export { GET_PRODUCT_DETAILS, GET_ALL_PRODUCT_IDS, GET_ORDERS_BY_USER, PROFILE_QUERY};
