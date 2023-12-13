import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);


export default function Doghnut() {

   
    const data = {
        labels:["Subscribe","Not Subscribe"],
        datasets:[
            {
                label:"Views",
                data:[3,20],
                borderColor:["rgb(62,12,171)","rgb(214,43,129,)"],
                backgroundColor:["rgba(62,12,171,0.3)","rgba(214,43,129,0.3)"],
                borderWidth:1
            }
        ]
    };

  return (
    <>
<Doughnut data={data}></Doughnut>
    </>
  )
}
