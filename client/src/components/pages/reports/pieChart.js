import React from 'react';
import { VictoryPie, VictoryLabel, VictoryTheme } from 'victory';

const PieChart = () => {
  const mockData = [
    { x: "Dog Clogs", y: 55 },
    { x: "Dog Socks", y: 40 },
    { x: "Kitten Mittens", y: 20 },
    { x: "Cat Hats", y: 35 }
  ];

  const colors = ['#2A9D8F', '#264653', '#CF6008', '#E76F51'];

  const total = mockData.reduce((acc, data) => acc + data.y, 0);

  const wrapText = (text, limit = 2) => {
    if (text.length > limit) {
      return [text.slice(0, limit), text.slice(limit)];
    }
    return text;
  };

  return (
    <div className='flex flex-col items-center  w-full min-w-[200px] min-h-[200px] flex justify-center '>
      <div className="w-full h-full flex justify-center items-center ">
 <div className="bg-yellow p-5 px-8 m-2 rounded shadow-lg">
   <h1 className='text-center font-bold text-dark mb-4'>Product Sales Distribution</h1> 
    <VictoryPie
    colorScale={colors}
      data={mockData}
      theme={VictoryTheme.material}
      labelRadius={({ radius }) => radius - 60}
      labels={({ datum }) => `${Math.round((datum.y / total) * 100)}%`}
      style={{
        labels: {
          fill: "white",
          fontSize: 18,
          fontWeight: "bold"
        }
      }}
      events={[{
        target: "data",
        eventHandlers: {
          onMouseOver: () => {
            return [
              {
                target: "labels",
                mutation: (props) => {
                    const text = wrapText(props.datum.x);
                    return { text: [text, props.text] };
                  }
              }
            ];
          },
          onMouseOut: () => {
            return [
              {
                target: "labels",
                mutation: () => {
                  return null;
                }
              }
            ];
          }
        }
      }]}
    />
    </div>
</div>
</div>

  );
};

export default PieChart;