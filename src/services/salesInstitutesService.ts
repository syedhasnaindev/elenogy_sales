import { apiRequest } from './apiService';


// Sales Institutes
export const fetchSalesInstitutes = async () => {
    return await apiRequest('/sales/sales-institutes', 'GET');
  };
  
  export const createSalesInstitute = async (instituteData: any) => {
    return await apiRequest('/sales/sales-institutes', 'POST', instituteData);
  };