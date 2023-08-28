import React from 'react';
import {
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLegend,
  VictoryBar,
} from 'victory';

const StackMap = () => {
  const stockData = [
    { x: 'Dog Clogs', y: 120 },
    { x: 'Cat Hats', y: 150 },
    { x: 'Kitten Mittens', y: 30 },
    { x: 'Dog Socks', y: 200 },
  ];

  const sellThroughRateData = [
    { x: 'Dog Clogs', y: 60 },
    { x: 'Cat Hats', y: 45 },
    { x: 'Kitten Mittens', y: 50 },
    { x: 'Dog Socks', y: 80 },
  ];

  return (
    <div className='flex flex-col'>
      <VictoryChart domainPadding={20} horizontal>
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={['Dog\nClogs', 'Cat\nHats', 'Kitten\nMittens', 'Dog\nSocks']}
  style={{
    tickLabels: { fontSize: 12, padding: 10 }
  }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `${x}`}
        />

        {/* Grouped Bar Chart */}
        <VictoryGroup offset={15}>
          <VictoryBar
            data={stockData}
            style={{ data: { fill: '#E9C46A', width: 15 } }}
          />
          <VictoryBar
            data={sellThroughRateData}
            style={{ data: { fill: '#E76F51', width: 15 } }}
          />
        </VictoryGroup>
      

      {/* Legend */}
      <VictoryLegend
        x={50}
        orientation='horizontal'
        gutter={20}
        style={{ border: { stroke: 'black' }, title: { fontSize: 14 } }}
        data={[
          { name: 'Stock Levels', symbol: { fill: '#E76F51' } },
          { name: 'Sell-Through Rate', symbol: { fill: '#E9C46A' } },
        ]}
      />
      </VictoryChart>
    </div>
  );
};

export default StackMap;
