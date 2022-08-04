import React, { useEffect, useState } from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


export const HeartChart = ({ importData }) => {

  const [dataState, setdataState] = useState({
    labels: importData.map(data => data.name),
    datasets: [
      {
        label: "Heart count",
        data: importData.map(data => data.heartCount),
        backgroundColor: importData.map(data => data.color),
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  })


  return (
    <div>
      <div className="chart-cont" style={{maxWidth: "40em"}}>
        <Pie data={dataState} options={{cutout: "10%"}}/>
      </div>
    </div>
  )
}
