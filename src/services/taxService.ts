import { apiRequest } from './apiService';


// Taxes
export const fetchTaxes = async () => {
    return await apiRequest('/sales/taxes', 'GET');
  };
  
  export const createTax = async (taxData: any) => {
    return await apiRequest('/sales/taxes', 'POST', taxData);
  };