import { apiRequest } from './apiService';

// Sales Payments
export const fetchSalesPayments = async () => {
    return await apiRequest('/sales/sales-payments', 'GET');
  };
  
  export const createSalesPayment = async (paymentData: any) => {
    return await apiRequest('/sales/sales-payments', 'POST', paymentData);
  };