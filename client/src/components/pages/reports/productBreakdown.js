import React from 'react';


const ProductBreakdown = () => {
  const productsData = [
    { name: 'Dog Clogs', unitsSold: 200 },
    { name: 'Dog Socks', unitsSold: 150 },
    { name: 'Kitten Mittens', unitsSold: 100 },
    { name: 'Cat Hats', unitsSold: 50 },
  ];

  return (
    <div className='flex flex-col justify-center items-center bg-lightOrange p-3 m-2  rounded shadow-lg'>
      <h2 className='text-lg font-semibold mb-4'>Product Breakdown</h2>
      <ul className=''>
        {productsData.map((product, index) => (
          <li key={index} className='flex justify-between p-4 border-b md:px-2 py-2'>
            <span className='text-sm font-medium pr-4'>{product.name}</span>
            <span className='text-sm'>{product.unitsSold} units</span>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default ProductBreakdown;
