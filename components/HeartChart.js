import React, { useEffect, useState } from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


export const HeartChart = ({ importData }) => {

  // console.log("importData");
  // console.log(importData);


  const [dataState, setdataState] = useState()

  const formatData = (dtArray) => {
    // console.log("dtArray")
    // console.log(dtArray)

    const objAry = [{ name: 'harold', heartCount: 30, color: "#ff00a5" }, { name: 'sally', heartCount: 12, color: "#ff00a5" }]
    // console.log("objAry");
    // console.log(objAry);

    const fmtData = {
      labels: dtArray.map(data => data.name),
      datasets: [
        {
          label: "Heart count",
          data: dtArray.map(data => data.heartCount),
          backgroundColor: dtArray.map(data => data.color),
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    }

    setdataState(fmtData)
    // console.log("dataState");
    // console.log(dataState);

  }

  useEffect(() => {
    // console.log(importData)

    formatData(importData)
  }, [importData])


  return (
    <>
      {dataState && (
        <div>
          <div className="chart-cont" style={{ maxWidth: "40em" }}>
            <Pie data={dataState} options={{ cutout: "10%" }} />
          </div>
        </div>

      )}
    </>
  )
}
