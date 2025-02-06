import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import SalesService from "../services/salesService";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await SalesService.getSalesData();
      setSalesData(data || []);
    };

    fetchData();
  }, []);

  if (!salesData || salesData.length === 0) {
    return <p className="text-center text-gray-500">No hay datos disponibles para el gráfico.</p>;
  }

  const salesByMonth = salesData.reduce((acc, item) => {
    const date = new Date(item.order_date);
    const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

    if (!acc[monthYear]) {
      acc[monthYear] = 0;
    }

    acc[monthYear] += Number(item.sales);
    return acc;
  }, {});

  const sortedLabels = Object.keys(salesByMonth).sort();

  const chartData = {
    labels: sortedLabels,
    datasets: [
      {
        label: "Ventas por Mes",
        data: sortedLabels.map((label) => salesByMonth[label]),
        borderColor: "rgb(179, 155, 255)",
        backgroundColor: "rgba(52, 9, 224, 0.86)",
        fill: true,
      },
    ],
  };

  return (
    <div className="p-5 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Ventas en el Tiempo</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Graph;
