import { apiRequest } from './apiService';


// Sales Services
export const fetchSalesServices = async () => {
    return await apiRequest('/sales/sales-services', 'GET');
  };
  
  export const createSalesService = async (serviceData: any) => {
    return await apiRequest('/sales/sales-services', 'POST', serviceData);
  };