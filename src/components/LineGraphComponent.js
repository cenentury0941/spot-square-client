import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function LineGraphComponent() {
  return (
    <div style={{display:"flex", height:"39vh", width:"90%", flexShrink:0}}>
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
                {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
            ]}
            />
    </div>
  );
}