import React from 'react';



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


let variable = [];

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['December', 'January', 'February', 'March'];
const monthsTotals = [
  { titoliLunghi: 79.272, htc: 28.104, htcs: 26.933, htcsIspLux: 1.364, otherHtcHtcs: 1.095, tradingLong: 20.371, tradingShort: -16.559 },
  { titoliLunghi: 82.993, htc: 30.119, htcs: 28.599, htcsIspLux: 1.540, otherHtcHtcs: 1.132, tradingLong: 20.217, tradingShort: -20.195 },
  { titoliLunghi: 81.915, htc: 29.950, htcs: 27.862, htcsIspLux: 1.387, otherHtcHtcs: 1.387, tradingLong: 20.131, tradingShort: -18.512 },
  { titoliLunghi: 80.240, htc: 30.737, htcs: 26.418, htcsIspLux: 1.150, otherHtcHtcs: 1.228, tradingLong: 19.274, tradingShort: -17.378 }
];
const monthsTotalsStoric = [
  { titoliLunghi: 78.272, htc: 28.104, htcs: 26.933, htcsIspLux: 1.364, otherHtcHtcs: 1.095, tradingLong: 20.371, tradingShort: -16.559 },
  { titoliLunghi: 81.993, htc: 30.119, htcs: 28.599, htcsIspLux: 1.540, otherHtcHtcs: 1.132, tradingLong: 20.217, tradingShort: -20.195 },
  { titoliLunghi: 82.915, htc: 29.950, htcs: 27.862, htcsIspLux: 1.387, otherHtcHtcs: 1.387, tradingLong: 20.131, tradingShort: -18.512 },
  { titoliLunghi: 81.240, htc: 30.737, htcs: 26.418, htcsIspLux: 1.150, otherHtcHtcs: 1.228, tradingLong: 19.274, tradingShort: -17.378 }
];

 

export function App(props) {
  let data = {
    labels,
    datasets: [
      {
        label: props.prop[0].titolo,
        data: props.prop[2].vars.map((x) => x),
        borderColor: 'rgb(' + props.prop[1].color +')',
        backgroundColor: 'rgba('+ props.prop[1].color  + ', 0.5)',
        yAxisID: 'y',
      },
    ],
  };
  console.log(props.prop)
  return <Line options={options} data={data} />
      
}