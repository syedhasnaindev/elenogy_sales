import { apiRequest } from './apiService';


// Inventory Allocations
export const fetchInventoryAllocations = async () => {
    return await apiRequest('/inventory/inventory-allocations', 'GET');
  };
  
  export const createInventoryAllocation = async (allocationData: any) => {
    return await apiRequest('/inventory/inventory-allocations', 'POST', allocationData);
  }; 