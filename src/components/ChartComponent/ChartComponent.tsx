import React, { Suspense, Fragment, useState, useEffect } from "react";
import styles from "./ChartComponent.module.css";

import type { ChartData, ChartOptions } from "chart.js";
import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
// import 'chart.js/dist/Chart.css';

import { Line } from 'react-chartjs-2';
import { LinearScale } from 'chart.js';
// import 'chart.js/dist/Chart.css';


// interface DataObject {
//   year: number;
//   count: number;
// }

// const data0: DataObject[] = [
//   { year: 2010, count: 10 },
//   { year: 2011, count: 20 },
//   { year: 2012, count: 15 },
//   { year: 2013, count: 25 },
//   { year: 2014, count: 22 },
//   { year: 2015, count: 30 },
//   { year: 2016, count: 28 },
// ];

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};


// Register the linear scale with Chart.js
LinearScale.id = 'y-axis-linear';
LinearScale.defaults = {
  ...LinearScale.defaults,
  ticks: {
    callback: (value) => value
  }
};
Chart.register(LinearScale);

export const ChartComponent = () => {

  return (
    <Fragment>
      <h1>Chart</h1>
      <Line data={data} options={options} />
      {/* <Doughnut
        data={{
          labels: data.map((d) => d.year.toString()),
          datasets: [
            {
              data: data.map((d) => d.count),
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#66BB6A",
                "#42A5F5",
                "#FFA726",
                "#7E57C2",
              ],
              hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#66BB6A",
                "#42A5F5",
                "#FFA726",
                "#7E57C2",
              ],
            },
          ],
        }}
      /> */}

    </Fragment>
  );
  // }
  // else {
  //   return <></>;
  // }
};
