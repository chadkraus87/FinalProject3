import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { PiPawPrintFill } from 'react-icons/pi';
import { useQuery, useMutation } from '@apollo/client';
import { ADMIN_GET_ALL_ORDERS } from '../../utils/queries';
import { ADMIN_UPDATE_ORDER_STATUS } from '../../utils/mutations';

function Orders () {
  const { loading, error, data } = useQuery(ADMIN_GET_ALL_ORDERS);
  const [adminUpdateOrderStatus] = useMutation(ADMIN_UPDATE_ORDER_STATUS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const latestOrders = data.adminGetAllOrders;

  // Calculating metrics
  const totalSales = latestOrders.reduce((acc, curr) => acc + curr.invoiceAmount, 0);
  const totalOrders = latestOrders.length;
  const totalProductsSold = latestOrders.reduce((acc, curr) => acc + curr.quantity, 0); 

  const handleStatusUpdate = async (orderId, newStatus) => {
    await adminUpdateOrderStatus({
      variables: { orderId, status: newStatus },
      refetchQueries: [{ query: ADMIN_GET_ALL_ORDERS }] 
    });
  };
  return (
        <div className="flex flex-col  bg-paleBlue">
            <div className="flex justify-evenly">
                <div className="bg-teal p-6 px-12 m-4 rounded shadow-md">

                    {/* Total Sales container */}
                <h2 className="text-lg font-semibold text-center">Total Sales</h2>
                <div className="flex items-center justify-center">
                <FaDollarSign className="text-darkBlue mr-1 mt-2 text-2xl"  />
                <span className='text-sm ml-2'> ${totalSales}</span>
                </div>
                </div>
                <div className="bg-teal p-6 px-12 m-4 rounded shadow-md">

                    {/* Total Orders container */}
                <h2 className="text-lg font-semibold text-center">Total Orders</h2>
                <div className="flex items-center justify-center"> 
                <BsFillBoxSeamFill className="text-darkBlue mr-1 mt-2 text-2xl"/>
                <p className='text-sm ml-2'> {totalOrders}</p>
                </div>
                </div>
                <div className="bg-teal p-6 px-12 m-4 rounded shadow-md">

                    {/* Total Products Sold container */}
                <h2 className="text-lg font-semibold text-center">Total Products</h2>
                <div className="flex items-center justify-center"> 
                <PiPawPrintFill className="text-darkBlue mr-1 mt-2 text-2xl"/>
                <p className='text-sm ml-2'> {totalProductsSold} units</p>
                </div>
                </div>
            </div>
            {/* Latest Orders Container */}
        <div className="bg-yellow p-6 my-10 rounded shadow-md overflow-y-auto md:container md:mx-auto">
    <h2 className="text-lg text-dark font-semibold mb-4">Latest Order Details</h2>
    <table className="min-w-full">
      <thead>
        <tr className='text-md text-smoke flex justify-between'>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Invoice Amount</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <div className='bg-tan flex justify-between'>
      <tbody >
        {latestOrders.map((order) => (
          <tr key={order.id} className="border-b border-dotted">
            <td>{order.id}</td>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>${order.invoiceAmount}</td>
            <td>{order.status}</td>
            <td>{order.date}</td>
            <td>
      <button onClick={() => handleStatusUpdate(order._id, 'Shipped')}>
        Mark as Shipped
      </button>
    </td>
          </tr>
        ))}
      </tbody>
      </div>
    </table>
  </div>
        </div>
    )
}

export default Orders;