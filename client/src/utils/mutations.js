import { gql } from '@apollo/client';

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

export const CREATE_REPLY = gql`
mutation createReply($reviewId: ID!, $text: String!) {
  createReply(reviewId: $reviewId, text: $text) {
    id
    reviewId
    text
    date
  }
}
`;

export const UPDATE_REPLY = gql`
mutation updateReply($id: ID!, $text: String!) {
  updateReply(id: $id, text: $text) {
    id
    reviewId
    text
    date
  }
}
`;

export const DELETE_REPLY = gql `
mutation deleteReply($id: ID!) {
  deleteReply(id: $id)
}
`;

export const CREATE_PRODUCT = gql`
mutation CreateProduct($productdata: CreateProductInput!) {
  createProduct(productdata: $productdata) {
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
mutation UpdateProduct($productdata: UpdateProductInput!) {
  updateProduct(productdata: $productdata) {
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
  toggleTask(id: $id) {
    id
    completed
  }
}
`;