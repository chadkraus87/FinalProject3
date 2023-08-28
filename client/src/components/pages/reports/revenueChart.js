import React from 'react';
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';

const LIGHT_GREY = 'rgb(45, 52, 54)';
const TEAL = 'rgb(42, 157, 143)';
const DARK_BLUE = 'rgb(38, 70, 83)';

const RevenueChart = () => {
{/* Mock Data */}
const mockData = [
  { day: 1, revenue: 100 },
  { day: 2, revenue: 150 },
  { day: 3, revenue: 200 },
  { day: 4, revenue: 120 },
  { day: 5, revenue: 170 },
  { day: 6, revenue: 220 },
  { day: 7, revenue: 300 },
  { day: 8, revenue: 330 },
  { day: 9, revenue: 290 },
  { day: 10, revenue: 400 },
  { day: 11, revenue: 420 },
  { day: 12, revenue: 350 },
  { day: 13, revenue: 370 },
  { day: 14, revenue: 250 },
  { day: 15, revenue: 275 },
  { day: 16, revenue: 310 },
  { day: 17, revenue: 390 },
  { day: 18, revenue: 365 },
  { day: 19, revenue: 355 },
  { day: 20, revenue: 480 },
  { day: 21, revenue: 450 },
  { day: 22, revenue: 435 },
  { day: 23, revenue: 465 },
  { day: 24, revenue: 475 },
  { day: 25, revenue: 490 },
  { day: 26, revenue: 460 },
  { day: 27, revenue: 405 },
  { day: 28, revenue: 325 },
  { day: 29, revenue: 380 },
  { day: 30, revenue: 390 },
  { day: 31, revenue: 500 },
];

const weeks = {};

mockData.forEach(({ day, revenue }) => {
  const weekNum = Math.ceil(day / 7);

  if (!weeks[weekNum]) {
    weeks[weekNum] = { week: weekNum, revenue: 0 };
  }

  weeks[weekNum].revenue += revenue;
});

const weeklyData = Object.values(weeks);


  return (
    <div className='flex justify-between pt-6 pl-2 '>
      <div className='bg-deepCoral rounded' style={{ width: '100%', height: '100%' }} >
        <h2 className="text-lg font-semibold text-center">Monthly Revenue</h2>

        <VictoryChart
          domainPadding={40}
          width={800}
          height={400}
          containerComponent={
            <VictoryVoronoiContainer
              labels={({ datum }) => `$${datum.revenue}`}
              labelComponent={
                <VictoryTooltip
                  constrainToVisibleArea
                  style={{ fill: LIGHT_GREY }}
                />
              }
            />
          }
        >
          <VictoryAxis
            tickValues={weeklyData.map((data) => data.week)}
            tickFormat={weeklyData.map((data) => `Week ${data.week}`)}
            style={{
              tickLabels: { fill: LIGHT_GREY, fontSize: 16},
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => `$${x}`}
            style={{
              tickLabels: { fill: LIGHT_GREY, fontSize: 14 },
            }}
          />
          <VictoryBar
            data={weeklyData}
            x="week"
            y="revenue"
            labels={({ datum }) => `$${datum.revenue}`}
            labelComponent={<VictoryTooltip />}
            style={{
              data: {
                fill: TEAL,
                fillOpacity: 0.7,
                stroke: DARK_BLUE,
                strokeWidth: 3,
              }
            }}
          />
        </VictoryChart>
      </div>
    </div>
  );
};

export default RevenueChart;
