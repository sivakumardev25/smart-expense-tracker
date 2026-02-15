import React from "react";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ data }) => {
  const total = data.values.reduce((a, b) => a + b, 0);

  const chartData = {
    labels: data.labels.map((label) => {
      const icons = {
        Food: "🍔",
        Travel: "✈️",
        Bills: "💡",
        Entertainment: "🎬",
        Health: "💊",
        Education: "📚",
        Groceries: "🛒",
        Savings: "💰",
        Income: "💵",
        Other: "🔖",
      };
      return `${icons[label] || "🔖"} ${label}`;
    }), // ['Food', 'Travel', 'Bills', 'Shopping', 'Entertainment', 'Health', 'Education']
    datasets: [
      {
        data: data.values, // [3000, 200, 400, 400, 500, 600, 700]
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#FF9F40",
          "#9B59B6",
          "#E74C3C",
          "#2ECC71",
          "#F39C12",
          "#1ABC9C",
        ],
        borderWidth: 1,
        // hoverOffset: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: 0, // ⭐ remove internal spacing
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 12,
          padding: 12,
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },

      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            const percent = total
              ? ((value / total) * 100).toFixed(1) + "%"
              : "0%";
            return `₹${value.toLocaleString()} (${percent})`;
          },
        },
      },

      // ⭐ Percentage labels
      datalabels: {
        color: "#333",
        font: {
          weight: "bold",
          size: 12,
        },
        formatter: (value) => {
          if (!total) return "0%";
          const percent = ((value / total) * 100).toFixed(0);
          return percent + "%";
        },
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default PieChart;
