
import { apiRequest } from './apiService';

// Sales Quotes
export const fetchCrmSalesQuotes = async () => {
    return await apiRequest('/crm/crm-sales-quotes', 'GET');
  };
  
  export const createCrmSalesQuote = async (quoteData: any) => {
    return await apiRequest('/crm/crm-sales-quotes', 'POST', quoteData);
  };