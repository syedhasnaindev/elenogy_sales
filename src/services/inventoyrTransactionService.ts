import { apiRequest } from './apiService';

// Inventory Transactions
export const fetchInventoryTransactions = async () => {
    return await apiRequest('/inventory/inventory-transactions', 'GET');
  };
  
  export const createInventoryTransaction = async (transactionData: any) => {
    return await apiRequest('/inventory/inventory-transactions', 'POST', transactionData);
  };
  