import { gql } from '@apollo/client';

export const GET_PRODUCT_DETAILS = gql`
query GetProduct($id: ID!) {
  productById(_id: $id) {
    _id
    animalType
    colors
    description
    model
    name
    price
    sizes
    reviews {
      name {
        name
      }
      rating
      text
      date
    }
  }
}
`;

export const GET_ALL_PRODUCT_IDS = gql`
query GetAllProductIds {
  getAllProducts {
    _id
    name
  }
}
`;

export const ADMIN_GET_ALL_ORDERS = gql`
  query AdminGetAllOrders {
    getAllOrders {
      _id
      products {
        product {
          name
          price
        }
      }
      date
      status
      invoiceAmount
    }
  }
`;

export const GET_ALL_CUSTOMERS = gql`
  query GetAllCustomers {
    getAllUsers {
      _id
      name
      email
    }
  }
`;

export const GET_ALL_MESSAGES = gql`
  query GetAllMessages {
    getAllMessages {
      _id
      user {
        name
      }
      subject
      content
      date
    }
  }
`;

export const GET_ALL_REVIEWS = gql`
query GetAllReviews {
  getAllReviews {
    name {
      name
    }
    rating
    text
    date
    replies {
      adminId
      reviewId
      text
      date
    }
  }
}
`;

export const GET_TASKS = gql`
query GetTasks {
  tasks {
    id
    text
    completed
  }
}
`;



export const GET_ORDERS_BY_USER = gql`
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



export const PROFILE_QUERY = gql`
  query Profile($uid: ID!) {
    userById(userId: $uid) {
      _id
      name
      email
    }
  }
`;


