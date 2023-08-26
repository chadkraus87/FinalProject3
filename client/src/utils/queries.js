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
  }
}
`;

const GET_ALL_PRODUCTS = gql`
query GetAllProducts {
  getAllProducts {
    _id
    animalType
    colors
    description
    model
    name
    price
    sizes
  }
}
`;

export { GET_PRODUCT_DETAILS, GET_ALL_PRODUCTS };


//query that was here.
// export const NEW_MESSAGE_SUBSCRIPTION = gql`
//   subscription OnNewMessage {
//     messageCreated {
//       id
//       user
//       subject
//       content
//       date
//     }
//   }
// `;






// import { gql } from '@apollo/client';

// export const GET_PRODUCT_DETAILS = gql`
//   query GetProduct($id: ID!) {
//     getProduct(_id: $id) {
//       _id
//       name
//       animalType
//       sizes
//       colors
//       description
//       model
//       price
//       reviews {
//         username
//         rating
//         text
//         date
//       }
//     }
//   }
// `;

// export const GET_ALL_PRODUCTS = gql`
//   query GetAllProducts {
//     getAllProducts {
//       _id
//       name
//       animalType
//       sizes
//       colors
//       description
//       model
//       price
//       reviews {
//         username
//         rating
//         text
//         date
//       }
//     }
//   }
// `;



// //query that was here.
// // export const NEW_MESSAGE_SUBSCRIPTION = gql`
// //   subscription OnNewMessage {
// //     messageCreated {
// //       id
// //       user
// //       subject
// //       content
// //       date
// //     }
// //   }
// // `;


