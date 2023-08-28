import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CartAbandonmentRate = () => {
  
  const totalCartsInitiated = 100;
  const totalCartsAbandoned = 20;

  const abandonmentRate = (totalCartsAbandoned / totalCartsInitiated) * 100;

  return (
    <div className='flex flex-col items-center bg-darkBlue p-6 m-4 rounded shadow-md'>
        <h2 className="text-lg font-semibold text-center"> Cart Abandonment Rate</h2>
    <div style={{ width: '200px', height: '200px' }}>
      <CircularProgressbar
      className='flex items-center'
        value={abandonmentRate}
        text={`${abandonmentRate.toFixed(2)}%`}
        styles={buildStyles({
          textColor: 'rgb(250, 250, 250)',
          pathColor: 'rgb(207, 96, 8)', 
          trailColor: 'rgb(99, 99, 99)',
        })}
      />
    </div>
    </div>
  );
};

export default CartAbandonmentRate;
