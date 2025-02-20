import { apiRequest } from './apiService';


// Sales Plans
export const fetchSalesPlans = async () => {
    return await apiRequest('/sales/sales-plans', 'GET');
  };
  
  export const createSalesPlan = async (planData: any) => {
    return await apiRequest('/sales/sales-plans', 'POST', planData);
  };