import { gql } from '@apollo/client';

export const NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription OnNewMessage {
    messageCreated {
      id
      user
      subject
      content
      date
    }
  }
`;
