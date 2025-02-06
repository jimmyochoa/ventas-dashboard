import axios from 'axios';

const API_URL = 'http://localhost:8000';

const SalesService = {
  getSalesData: async (startDate = null, endDate = null, category = null) => {
    try {
      const params = {};
      if (startDate) params.start_date = startDate;
      if (endDate) params.end_date = endDate;
      if (category) params.category = category;

      const response = await axios.get(`${API_URL}/all_sales/`, { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching sales data:", error);
      return [];
    }
  },

  getSalesSummary: async () => {
    try {
      const response = await axios.get(`${API_URL}/sales_summary/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching sales data:", error);
      return [];
    }
  },

  getTopCustomers: async () => {
    try {
      const response = await axios.get(`${API_URL}/top_customers/`);  // Ajusta el endpoint
      return response.data;
    } catch (error) {
      console.error("Error fetching top customers:", error);
      return [];
    }
  }
};

export default SalesService;
