import React, { useState, useEffect } from "react";
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa"; // Usando íconos
import SalesService from "../services/salesService"; // Ajusta la ruta de tu servicio

const TopCustomersCard = () => {
  const [topCustomers, setTopCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Limitar a 3 elementos por página

  useEffect(() => {
    const fetchData = async () => {
      const data = await SalesService.getTopCustomers(); // Cambia esto según tu endpoint real
      setTopCustomers(data || []);
    };
    fetchData();
  }, []);

  // Paginación: obtiene los clientes para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = topCustomers.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(topCustomers.length / itemsPerPage);

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

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full mx-auto overflow-hidden min">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Clientes</h3>

      <div className="overflow-y-auto max-h-[300px] space-y-2">
        {currentItems.length > 0 ? (
          currentItems.map((customer, index) => (
            <div key={index} className="flex items-center justify-between p-2 border-b border-gray-200 last:border-0 text-xs">
              {/* Cliente Info */}
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-gray-600" />
                <div>
                  <h4 className="font-medium text-gray-800">{customer.customer_name}</h4>
                  <p className="text-gray-500">{customer.city}</p>
                </div>
              </div>

              {/* Ventas y Ganancia */}
              <div className="text-right">
                <p className="text-gray-500">Ventas: <FaDollarSign className="inline-block text-green-600" /> {parseFloat(customer.total_sales).toLocaleString()}</p>
                <p className="text-gray-500">Ganancia: <FaDollarSign className="inline-block text-green-600" /> {parseFloat(customer.total_profit).toLocaleString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No hay clientes disponibles</p>
        )}
      </div>

      {/* Paginación */}
      <div className="flex justify-between items-center mt-4 text-xs text-gray-600">
        <button onClick={prevPage} className="hover:text-blue-500 disabled:text-gray-300" disabled={currentPage === 1}>
          Anterior
        </button>

        {/* Paginación con números */}
        <div className="flex space-x-1">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => goToPage(index + 1)}
              className={`px-2 py-1 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button onClick={nextPage} className="hover:text-blue-500 disabled:text-gray-300" disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default TopCustomersCard;
