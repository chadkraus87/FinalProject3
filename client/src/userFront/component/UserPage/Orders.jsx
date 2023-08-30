import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ORDERS_BY_USER } from '../../../utils/queries';

function Orders() {
  const [orders, setOrders] = useState([]);
  const match = window.location.search.match(/uid=(\d+)/);
  const userId = match ? match[1] : null;
  const { data, error, loading } = useQuery(GET_ORDERS_BY_USER, {
    variables: { userId: userId },
    skip: !userId
  });
  

  useEffect(() => {
    if (loading) return;
    if (data && data.getOrdersByUser) {
      setOrders(data.getOrdersByUser);
    }
  }, [data, loading]);
    console.log("error loading (undefined has been problem with authentication)", data)
  //error checker
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading orders: {error.message}</p>;

  return (
    <div>
      <h2>My Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <h3>{order.products.map(product => product.name).join(', ')}</h3>
            <p>{order.orderDate}</p>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Orders;