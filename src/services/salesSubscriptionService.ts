import { apiRequest } from './apiService';


// Sales Subscriptions
export const fetchSalesSubscriptions = async () => {
    return await apiRequest('/sales/sales-subscriptions', 'GET');
  };
  
  export const createSalesSubscription = async (subscriptionData: any) => {
    return await apiRequest('/sales/sales-subscriptions', 'POST', subscriptionData);
  };
  