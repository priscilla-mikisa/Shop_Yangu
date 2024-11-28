"use client";

import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  ChartOptions,
} from "chart.js";
import Chart from "chart.js/auto";
import Layout from "../Layout";

// Register Chart.js components
Chart.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Title);

const Dashboard = () => {
  // Data for circular charts
  const productData = {
    datasets: [
      {
        data: [13, 20, 3], // Out-of-stock, In-stock, Low-stock
        backgroundColor: ["#8BC34A", "#0D47A1", "#FFD600"],
        borderWidth: 2,
      },
    ],
    labels: ["Out-of-stock", "In-stock", "Low-stock"],
  };

  const shopData = {
    datasets: [
      {
        data: [50, 10], // Active, Inactive
        backgroundColor: ["#8BC34A", "#0D47A1"],
        borderWidth: 2,
      },
    ],
    labels: ["Active", "Inactive"],
  };

  // Data for bar chart
  const barData = {
    labels: ["Canary", "NextDoor", "Mount", "North", "Mama"],
    datasets: [
      {
        label: "Number of products in stock",
        data: [50, 80, 20, 15, 45], // Example data
        backgroundColor: "#0D47A1",
      },
    ],
  };

  // Chart.js options to adjust chart appearance
  const barOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: true,
        text: "Top 5 Shops By Stock Level",
        font: {
          size: 18,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Shops', // X-axis label
          font: {
            size: 16,
          },
        },
        ticks: {
          font: {
            size: 14,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Number of Products in Stock', // Y-axis label
          font: {
            size: 16,
          },
        },
        ticks: {
          font: {
            size: 14,
          },
        },
        grid: {
          borderDash: [4, 4] as [number, number],
        },
      },
    },
  };

  return (
    <Layout>
      <div className="pl-8 bg-gray-100 h-screen overflow-auto ml-10">
        {/* Grid Layout for Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Products Doughnut Chart */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow" style={{ maxWidth: '500px', height: '400px' }}>
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            <Doughnut data={productData} options={{ responsive: true, maintainAspectRatio: true }} />
            <div className="flex justify-between w-full mt-4 text-sm">
              <span>Out-of-stock: 13</span>
              <span>In-stock: 20</span>
              <span>Low-stock: 3</span>
            </div>
          </div>

          {/* Shops Doughnut Chart */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow" style={{ maxWidth: '500px', height: '400px' }}>
            <h3 className="text-xl font-semibold mb-4">Shops</h3>
            <Doughnut data={shopData} options={{ responsive: true, maintainAspectRatio: true }} />
            <div className="flex justify-between w-full mt-4 text-sm">
              <span>Active: 50</span>
              <span>Inactive: 10</span>
            </div>
          </div>
        </div>

        {/* Centered Bar Chart for Stock Levels */}
        <div className="flex justify-center mt-10 ml-[16rem]">
          <div className="bg-white p-6 rounded-lg shadow" style={{ height: "450px", width: '100%' }}>
            <h3 className="text-xl font-semibold mb-4 ml-[10rem]">
              Top 5 Shops By Stock Level
            </h3>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;