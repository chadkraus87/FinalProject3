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
      username
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

// Query to get all orders
 const ADMIN_GET_ALL_ORDERS = gql`
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

 const GET_ALL_CUSTOMERS = gql`
  query GetAllCustomers {
    profiles {
      _id
      name
      email
      totalOrders
    }
  }
`;

export { GET_PRODUCT_DETAILS, 
  GET_ALL_PRODUCT_IDS,
  ADMIN_GET_ALL_ORDERS,
  GET_ALL_CUSTOMERS
};
