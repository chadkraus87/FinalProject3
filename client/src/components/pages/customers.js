import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CUSTOMERS } from '../../utils/queries';

function Customers() {
  const { loading, error, data } = useQuery(GET_ALL_CUSTOMERS);
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredCustomers = data.getAllUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user._id.includes(searchTerm)
  );

  return (
    <div className="bg-deepCoral p-6 my-10 rounded shadow-lg overflow-y-auto md:container md:mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-dark font-semibold mb-4">Customer Details</h2>

        <div className="mb-4 ">
          <label htmlFor="search">Search: </label>
          <input
            className='bg-offWhite rounded text-center'
            type="text"
            id="search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder=" Search customer"
          />
        </div>
      </div>
      <table className="min-w-full">
        <thead>
          <tr className='text-md text-smoke flex justify-between'>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <div className='bg-tan flex justify-between'>
          <tbody>
            {filteredCustomers.map((user) => (
              <tr key={user._id} className="border-b border-dotted">
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  );
}

export default Customers;
