import { apiRequest } from './apiService';

// Inventory Stock
export const fetchInventoryStock = async () => {
    return await apiRequest('/inventory/inventory-stock', 'GET');
  };
  
  export const createInventoryStock = async (stockData: any) => {
    return await apiRequest('/inventory/inventory-stock', 'POST', stockData);
  };