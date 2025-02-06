import React from "react";

const Table = ({ currentItems }) => {
  const itemsToDisplay = Array.isArray(currentItems) ? currentItems : [];

  return (
    <div className="w-full overflow-x-auto">
      <table className="divide-y divide-gray-300 rounded-xl">
        <thead className="bg-purple-700 text-white">
          <tr>
            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm rounded-tl-xl">Order ID</th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm">Customer</th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm">Category</th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm">Sub Category</th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm">City</th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm">Region</th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm">Sales</th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm">Order Date</th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm">Discount</th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm rounded-tr-xl">Profit</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {itemsToDisplay.length > 0 ? (
            itemsToDisplay.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-2 sm:px-4 py-4 text-xs sm:text-sm text-gray-900">{item.order_id}</td>
                <td className="px-2 sm:px-4 py-4 text-xs sm:text-sm text-gray-900">{item.customer_name}</td>
                <td className="px-2 sm:px-4 py-4 text-xs sm:text-sm text-gray-900">{item.category}</td>
                <td className="px-2 sm:px-4 py-4 text-xs sm:text-sm text-gray-900">{item.sub_category}</td>
                <td className="px-2 sm:px-4 py-4 text-xs sm:text-sm text-gray-900">{item.city}</td>
                <td className="px-2 sm:px-4 py-4 text-xs sm:text-sm text-gray-900">{item.region}</td>
                <td className="px-2 sm:px-4 py-4 text-xs sm:text-sm text-gray-900">{item.sales}</td>
                <td className="px-2 sm:px-4 py-4 text-xs sm:text-sm text-gray-900">{item.order_date}</td>
                <td className="px-2 sm:px-4 py-4 text-xs sm:text-sm text-gray-900">{item.discount}</td>
                <td className="px-2 sm:px-4 py-4 text-xs sm:text-sm text-gray-900 rounded-bl-xl">${item.profit}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="px-2 sm:px-4 py-4 text-xs sm:text-sm text-gray-900 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
