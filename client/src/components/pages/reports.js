import React from 'react';
import RevenueChart from './reports/revenueChart';
import StackMap from './reports/stackMap';


// KPI Component
const KPI = ({ description, value  }) => (
  <div className="kpi-container flex items-center justify-between min-w-full border-b border-dotted">
    <h1 className="text-base ">{description}</h1>
    <p className="text-base px-6">{value}</p>
  </div>
);

// Export to CSV Function
const exportToCSV = (data) => {
let csvContent = "data:text/csv;charset=utf-8,";

// headers
csvContent += "KPI,Value\n";

// body
data.forEach((rowArray) => {
  const row = rowArray.join(",");
  csvContent += row + "\n";
});

const encodedUri = encodeURI(csvContent);
const link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "kpi_report.csv");
document.body.appendChild(link);

link.click();
};

function Reports() {
 {/* This will be fetched from an API or taken from state */}
 const totalSales = 12000;
 const avgOrderValue = 200;
 const conversionRate = '2.5%';
 const cartAbandonmentRate = '15%';
 const newVsReturning = '60/40';
 const revenuePerVisitor = '$4.20';
 const bounceRate = '35%';

// KPI Data for export
const kpiData = [
 ["Total Sales", `$${totalSales}`],
 ["Average Order Value", `$${avgOrderValue}`],
 ["Conversion Rate", conversionRate],
 ["Cart Abandonment Rate", cartAbandonmentRate],
 ["New vs Returning Customers", newVsReturning],
 ["Revenue Per Visitor", revenuePerVisitor],
 ["Bounce Rate", bounceRate]
];


  return (
    <div className="flex flex-col bg-paleBlue">
        <div className='bg-tan p-6 m-6 rounded flex flex-col'>
        <h2 className='text-xl text-dark text-center font-bold'>Metrics</h2>
        <button onClick={() => exportToCSV(kpiData)} className='bg-darkBlue text-offWhite p-2 mb-2 mr-4 rounded hover:bg-teal transition duration-200 self-end text-xs'>
          Export KPIs
          </button>
        <div className='bg-offWhite p-4 mr-3 rounded '>

     <KPI description="Total Sales" value={`$${totalSales}`} />
          <KPI description="Average Order Value" value={`$${avgOrderValue}`} />
          <KPI description="Conversion Rate" value={conversionRate} />
          <KPI description="Cart Abandonment Rate" value={cartAbandonmentRate} />
          <KPI description="New vs Returning Customers" value={newVsReturning} />
          <KPI description="Revenue Per Visitor" value={revenuePerVisitor} />
          <KPI description="Bounce Rate" value={bounceRate} />
      
          <div className='flex pt-6'>
            <div className='w-1/2 p-2'>
              <RevenueChart />
            </div>
            <div className='w-1/2 p-2'>
              <StackMap />
            </div>
          </div>
</div>
</div>
    </div>
  );
};

export default Reports;