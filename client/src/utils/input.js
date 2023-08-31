
  
  // Queries for User and Authentication
  query getAllUsers {
    getAllUsers {
      _id
      name
      email
      isAdmin
    }
  }
  
  query userById($userId: ID!) {
    userById(userId: $userId) {
      _id
      name
      email
    }
  }
  
  query getUserProfile {
    getUserProfile {
      _id
      name
      email
      isAdmin
    }
  }
  
  query isAdmin {
    isAdmin
  }
  
  // Queries for Orders
  query getOrdersByUser($userId: ID!) {
    getOrdersByUser(userId: $userId) {
      _id
      userId
      invoiceAmount
      status
      date
      products {
        product {
          _id
          name
          price
        }
        quantity
      }
    }
  }
  
  query adminGetAllOrders {
    adminGetAllOrders {
      _id
      userId
      invoiceAmount
      status
      date
    }
  }
  
  query getAllOrders {
    getAllOrders {
      _id
      userId
      invoiceAmount
      status
      date
    }
  }
  
  query orderById($orderId: ID!) {
    orderById(_id: $orderId) {
      _id
      userId
      invoiceAmount
      status
      date
    }
  }
  
  // Queries for Reviews
  query getAllReviews {
    getAllReviews {
      name {
        name
      }
      rating
      text
      date
    }
  }
  
  query reviewById($reviewId: ID!) {
    reviewById(id: $reviewId) {
      name {
        name
      }
      rating
      text
      date
    }
  }
  
  // Queries for Messages
  query getAllMessages {
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
  
  // Queries for Tasks
  query tasks {
    tasks {
      id
      text
      completed
    }
  }
  