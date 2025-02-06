import React, { useEffect, useState } from "react";
import { FaChartLine } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

import Card from "./Card";
import SalesService from "../services/salesService";
import TopCustomersCard from "./TopCustomersCard";

const Indicators = () => {
    const [totalSales, setTotalSales] = useState(0);
    const [totalProfit, setTotalProfit] = useState(0);
    const [totalCustomers, setTotalCustomers] = useState(0);

    const formatCurrency = (number) => {
        return new Intl.NumberFormat('es-ES', { 
            style: 'currency', 
            currency: 'USD', 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        }).format(number);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await SalesService.getSalesSummary();
            setTotalSales(data.total_sales || 0);
            setTotalProfit(data.total_profit || 0);
            setTotalCustomers(data.total_customers || 0);
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-wrap gap-5 w-full">
            <Card 
                icon={CiShoppingCart} 
                title="Total de Venta" 
                value={formatCurrency(totalSales)} 
                gradientStart="bg-gradient-to-r from-violet-800 to-purple-400" 
            />

            <Card 
                icon={FaChartLine} 
                title="Total de Ganancia" 
                value={formatCurrency(totalProfit)} 
                gradientStart="bg-gradient-to-r from-indigo-800 to-blue-500" 
            />

            <Card 
                icon={IoPersonOutline} 
                title="Total Clientes" 
                value={totalCustomers}
                gradientStart="bg-gradient-to-l from-teal-300 to-blue-500"
            />
          
        </div>
    );
}

export default Indicators;
