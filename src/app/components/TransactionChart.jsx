"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TransactionChart({ income, expense }) {
  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ["#22c55e", "#ef4444"], // green, red
        hoverBackgroundColor: ["#16a34a", "#dc2626"],
      },
    ],
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Financial Overview</h2>
      <Pie data={data} />
    </div>
  );
}
