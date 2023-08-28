import React from 'react';
import WeeklyRevenueChart from './reports/weeklyRevenueChart';
import PieChartComponent from './reports/pieChart';
import ProductBreakdownComponent from './reports/productBreakdown';
import TaskManager from './taskManager';
import LatestReviews from './latestReviews';

function MainDashboard() {
  // Mock data
  const totalCustomers = 200;
  const customerPercentIncrease = 5;
  const totalOrders = 100;
  const orderPercentIncrease = 2;
  const unreadMessages = 15;

  return (
    <div className="flex flex-col p-4">
      {/* First Row: Small containers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-deepCoral p-4 rounded">
          <h2 className="text-lg font-semibold text-center">Total Customers:</h2>
          <p className='text-xl text-center'>{totalCustomers} ({customerPercentIncrease}% increase)</p>
        </div>
        <div className="bg-deepCoral p-4 rounded">
          <h2 className="text-lg font-semibold text-center">Total Orders:</h2>
          <p className='text-xl text-center'> {totalOrders} ({orderPercentIncrease}% increase)</p>
        </div>
        <div className="bg-deepCoral p-4 rounded">
         <h2 className="text-lg font-semibold text-center"> Unread Messages: </h2>
          <p className='text-xl text-center'>{unreadMessages}</p>
        </div>
      </div>

      {/* Second Row: Pie Chart, Product Breakdown,  Weekly Revenue Chart*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className=" p-4 rounded">
          <PieChartComponent />
        </div>
        <div className=" p-4 rounded">
          <ProductBreakdownComponent />
        </div>
        <div className="p-4">
        <WeeklyRevenueChart />
      </div>
      </div>

     

      {/* Third Row: Latest Reviews and Task Manager */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-teal p-4 rounded">
          {/* Task Manager */}
          <TaskManager />
        </div>
        <div className="bg-teal p-4 rounded">
          {/* Latest 10 Reviews */}
          <LatestReviews />
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
