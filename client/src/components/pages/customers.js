import React, { useState } from 'react';

function Customers ( { customerData = [] }) {
    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredCustomers = customerData.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.id.toString().includes(searchTerm)
      );

    return (
        <div className="bg-deepCoral p-6 my-10 rounded shadow-md overflow-y-auto md:container md:mx-auto">
            <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-dark font-semibold mb-4">Customer Details</h2>
  
        <div className="mb-4 ">
          <label htmlFor="search">Search: </label>
          <input className='bg-offWhite rounded text-center'
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
              <th>Total Orders</th>
            </tr>
          </thead>
          <div className='bg-tan flex justify-between'>
            <tbody>
              {filteredCustomers.map((profile) => (
                <tr key={profile.id} className="border-b border-dotted">
                  <td>{profile.id}</td>
                  <td>{profile.name}</td>
                  <td>{profile.email}</td>
                  <td>{profile.totalOrders}</td>
                </tr>
              ))}
            </tbody>
          </div>
        </table>
      </div>
    )
}

export default Customers;