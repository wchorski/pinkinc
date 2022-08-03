import React from 'react'
import { Bar } from 'react-chartjs-2'

export const HeartChart = () => {
  return (
    <div>
      <Bar 
        data={{
          labels: ['red', 'blue', 'green'],
          datasets: [
            {
              label: "# of votes",
              data: [12, 19, 5]
            }
          ]
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
      <h1>O - HeartChart - O</h1>
    </div>
  )
}
