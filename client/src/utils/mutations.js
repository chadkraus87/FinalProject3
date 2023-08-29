import { gql } from '@apollo/client';

// Mutation to update order status
export const ADMIN_UPDATE_ORDER_STATUS = gql`
  mutation AdminUpdateOrderStatus($orderId: ID!, $status: String!) {
    adminUpdateOrderStatus(orderId: $orderId, status: $status) {
      _id
      status
    }
  }
`;

// Subscription for New Messages (optional)
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

// Add a Message
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

// Create Review Reply
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

// Update Review Reply
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
