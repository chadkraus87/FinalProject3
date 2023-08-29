import { gql } from '@apollo/client';

export const GET_PRODUCT_DETAILS = gql`
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

export const GET_ALL_PRODUCT_IDS = gql`
query GetAllProductIds {
  getAllProducts {
    _id
    name
  }
}
`;

// Query to get all orders
export const ADMIN_GET_ALL_ORDERS = gql`
  query AdminGetAllOrders {
    adminGetAllOrders {
      _id
      products {
        name
        price
      }
      orderDate
      status
      invoiceAmount
      email
    }
  }
`;

export const GET_ALL_CUSTOMERS = gql`
  query GetAllCustomers {
    profiles {
      _id
      name
      email
      totalOrders
    }
  }
`;

// Fetch All Messages
export const GET_ALL_MESSAGES = gql`
  query GetAllMessages {
    messages {
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


// Fetch All Reviews
export const GET_ALL_REVIEWS = gql`
query getAllReviews {
  id
  user
  product
  date
  content
  rating
  replies {
    id
    reviewId
    content
    date
  }
}
`; 
 