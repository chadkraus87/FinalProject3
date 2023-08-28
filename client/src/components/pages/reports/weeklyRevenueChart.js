import React from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer
} from 'victory';

const getPastWeekDates = () => {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(`${d.getMonth() + 1}-${d.getDate()}`);
  }
  return dates.reverse();
};

const WeeklyRevenueChart = () => {
  // Mock Data for Weekly Revenue
  const dates = getPastWeekDates();

  const mockData = dates.map((date, index) => ({
    date,
    revenue: Math.floor(Math.random() * 1000) + 3000 // Replace with real data
  }));

  return (
    <div className='flex justify-evenly rounded md:container md:mx-auto'>
      <div className='bg-tan rounded p-5 px-8 m-2'>
        <h1 className="text-lg font-semibold text-center">Weekly Revenue</h1>
        <VictoryChart
          theme={VictoryTheme.material}
          containerComponent={
            <VictoryVoronoiContainer
              labels={({ datum }) => `$${datum.revenue}`}
              labelComponent={<VictoryTooltip constrainToVisibleArea />}
            />
          }
        >
          <VictoryAxis
            tickValues={mockData.map((data) => data.date)}
            tickFormat={mockData.map((data) => `${data.date}`)}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => `$${x}`}
          />
          <VictoryLine
            data={mockData}
            x="date"
            y="revenue"
          />
        </VictoryChart>
      </div>
    </div>
  );
};

export default WeeklyRevenueChart;

