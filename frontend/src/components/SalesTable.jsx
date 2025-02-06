import React, { useState, useEffect } from "react";
import Table from "./Table";
import Pagination from "./Pagination";
import SalesService from "../services/salesService";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

const SalesTable = () => {
  const [salesData, setSalesData] = useState([]);
  const [filteredSalesData, setFilteredSalesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState(""); 
  const [categories, setCategories] = useState([]); 
  const [startDate, setStartDate] = useState(null); 
  const [endDate, setEndDate] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await SalesService.getSalesData(startDate, endDate, categoryFilter);
      setSalesData(data || []);
      setFilteredSalesData(data || []);

      const uniqueCategories = [...new Set(data.map(item => item.category))];
      setCategories(uniqueCategories);
      
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    };
    fetchData();
  }, [startDate, endDate, categoryFilter, itemsPerPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSalesData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const maxVisiblePages = 3;
  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 my-10">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-6">Ventas por Productos</h2>

      <div className="mb-4">
        <label htmlFor="categoryFilter" className="text-sm font-semibold text-gray-700">Filtrar por categoría</label>
        <select
          id="categoryFilter"
          className="mt-2 block w-50 px-4 py-2 border rounded-md"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">Todas</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-5 mb-4">
        <div className="w-full sm:w-auto">
          <label htmlFor="startDate" className="text-sm font-semibold text-gray-700">Fecha de inicio</label>
          <DatePicker
            selected={startDate} 
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mx-4"
            placeholderText="YYYY-MM-DD"
          />
        </div>

        <div className="w-full sm:w-auto">
          <label htmlFor="endDate" className="text-sm font-semibold text-gray-700">Fecha de fin</label>
          <DatePicker
            selected={endDate} 
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mx-4"
            placeholderText="YYYY-MM-DD"
          />
        </div>
      </div>

      <Table currentItems={currentItems} />

      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        paginate={paginate}
        currentPage={currentPage}
        totalPages={totalPages}
        pageNumbers={pageNumbers}
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        salesData={salesData}
      />
    </div>
  );
};

export default SalesTable;
