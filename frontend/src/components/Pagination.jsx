import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ prevPage, nextPage, paginate, currentPage, totalPages, pageNumbers, indexOfFirstItem, indexOfLastItem, salesData }) => {
  return (
    <div className="flex items-center justify-between mt-6">
      <p className="text-xs sm:text-sm text-gray-700">
        Mostrando <span className="font-medium">{indexOfFirstItem + 1}</span> a{" "}
        <span className="font-medium">{Math.min(indexOfLastItem, salesData.length)}</span> de{" "}
        <span className="font-medium">{salesData.length}</span> resultados
      </p>
      <div className="flex items-center space-x-2">

        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="flex items-center justify-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-indigo-50 disabled:text-gray-400 disabled:bg-gray-100"
        >
          <FaChevronLeft className="h-4 sm:h-5 w-4 sm:w-5" />
        </button>

        {currentPage > 3 && (
          <>
            <button
              onClick={() => paginate(1)}
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              1
            </button>
            <span className="text-xs sm:text-sm text-gray-700">...</span>
          </>
        )}

        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium ${
              currentPage === pageNumber
                ? "bg-purple-600 text-white"
                : "text-gray-700 hover:bg-gray-50"
            } border border-gray-300 rounded-md`}
          >
            {pageNumber}
          </button>
        ))}

        {currentPage < totalPages - 2 && (
          <>
            <span className="text-xs sm:text-sm text-gray-700">...</span>
            <button
              onClick={() => paginate(totalPages)}
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-indigo-50 disabled:text-gray-400 disabled:bg-gray-100"
        >
          <FaChevronRight className="h-4 sm:h-5 w-4 sm:w-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
