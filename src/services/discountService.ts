import { apiRequest } from './apiService';

// Discounts
export const fetchDiscounts = async () => {
    return await apiRequest('/sales/discounts', 'GET');
  };
  
  export const createDiscount = async (discountData: any) => {
    return await apiRequest('/sales/discounts', 'POST', discountData);
  };