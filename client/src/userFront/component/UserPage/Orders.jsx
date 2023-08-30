import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ORDERS_QUERY } from '../../../utils/queries';

function Orders() {
  const [orders, setOrders] = useState([]);
  const { data, error, loading } = useQuery(ORDERS_QUERY, {
    variables: { uid: parseInt(window.location.search.match(/uid=(\d+)/)) },
  });

  useEffect(() => {
    if (loading) return;
    setOrders(data.orders);
  }, [data, loading]);

  return (
    <div>
      <h2>My Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <h3>{order.name}</h3>
            <p>{order.description}</p>
            <p>${order.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;