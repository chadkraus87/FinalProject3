import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        isAdmin
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        isAdmin
      }
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($name: String, $email: String, $password: String, $isAdmin: Boolean) {
    updateUser(name: $name, email: $email, password: $password, isAdmin: $isAdmin) {
      _id
      name
      email
      isAdmin
    }
  }
`;

export const REMOVE_USER = gql`
  mutation RemoveUser {
    removeUser {
      _id
      name
      email
      isAdmin
    }
  }
`;

export const CREATE_PRODUCT = gql`
mutation CreateProduct(
    $name: String!,
    $animalType: String!,
    $size: String!,
    $color: String!,
    $description: String!,
    $model: String,
    $price: Float!) {
  createProduct(
      name: $name,
      animalType: $animalType,
      size: $size,
      color: $color,
      description: $description,
      model: $model,
      price: $price) {
        _id
      name
      animalType
      sizes
      colors
      description
      model
      price
  }
}
`;

export const UPDATE_PRODUCT = gql`
mutation UpdateProduct(
    $id: ID!,
    $name: String,
    $animalType: String,
    $size: String,
    $color: String,
    $description: String,
    $model: String,
    $price: Float) {
  updateProduct(
      id: $id,
      name: $name,
      animalType: $animalType,
      size: $size,
      color: $color,
      description: $description,
      model: $model,
      price: $price) {
        _id
      name
      animalType
      sizes
      colors
      description
      model
      price
  }
}
`;

export const ADD_ORDER = gql`
  mutation AddOrder($invoiceAmount: Float!, $status: String!, $products: [OrderedProductInput!]!) {
    addOrder(invoiceAmount: $invoiceAmount, status: $status, products: $products) {
      _id
      userId
      invoiceAmount
      status
      date
      products {
        product {
          _id
          name
          animalType
          sizes
          colors
          description
          model
          price
        }
        quantity
      }
    }
  }
`;

export const ADMIN_UPDATE_ORDER_STATUS = gql`
  mutation AdminUpdateOrderStatus($orderId: ID!, $status: String!) {
    adminUpdateOrderStatus(orderId: $orderId, status: $status) {
      _id
      status
    }
  }
`;

export const NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription {
    messageCreated {
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

export const ADD_MESSAGE = gql`
  mutation AddMessage($userId: ID!, $subject: String!, $content: String!) {
    addMessage(userId: $userId, subject: $subject, content: $content) {
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

export const REPLY_TO_MESSAGE = gql`
  mutation ReplyToMessage($messageId: ID!, $content: String!) {
    replyToMessage(messageId: $messageId, content: $content) {
      adminId
      messageId
      text
      date
    }
  }
`;

export const CREATE_REPLY = gql`
mutation createReviewReply($reviewId: ID!, $text: String!) {
  createReviewReply(reviewId: $reviewId, text: $text) {
    id
    reviewId
    text
    date
  }
}
`;

export const UPDATE_REPLY = gql`
mutation updateReviewReply($id: ID!, $text: String!) {
  updateReviewReply(id: $id, text: $text) {
    id
    reviewId
    text
    date
  }
}
`;

export const DELETE_REPLY = gql `
mutation deleteReviewReply($id: ID!) {
  deleteReviewReply(id: $id)
}
`;



export const ADD_TASK = gql`
mutation AddTask($text: String!) {
  addTask(text: $text) {
    id
    text
    completed
  }
}
`;

export const DELETE_TASK = gql`
mutation deleteTask($id: ID!) {
  deleteTask(id: $id)
}
`;

export const TOGGLE_TASK = gql`
mutation toggleTaskCompletion($id: ID!) {
  toggleTaskCompletion(id: $id) {
    id
    completed
  }
}
`;