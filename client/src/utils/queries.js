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
      name
      user
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

// Get Tasks
export const GET_TASKS = gql`
query GetTasks {
  getTasks {
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
  query Profile($uid: Int!) {
    profile(uid: $uid) {
      _id
      name
      email
      password
    }
  }
`;

