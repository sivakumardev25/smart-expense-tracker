import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.labels, // ['Food', 'Travel', 'Bills', 'Shopping', 'Entertainment', 'Health', 'Education']
    datasets: [
      {
        label: "Expenses",
        data: data.values, // [3000, 200, 400, 400, 500, 600, 700]
        backgroundColor: "#4BC0C0",
        borderColor: "#36A2EB",
        borderRadius: 6,
        // borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default BarChart;
