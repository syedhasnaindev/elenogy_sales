import { apiRequest } from './apiService';


// Sales Orders
export const fetchSalesOrders = async () => {
    return await apiRequest('/sales/sales-orders', 'GET');
  };
  
  export const createSalesOrder = async (orderData: any) => {
    return await apiRequest('/sales/sales-orders', 'POST', orderData);
  };