import { apiRequest } from './apiService';


// Sales Contacts
export const fetchSalesContacts = async () => {
    return await apiRequest('/sales/sales-contacts', 'GET');
  };
  
  export const createSalesContact = async (contactData: any) => {
    return await apiRequest('/sales/sales-contacts', 'POST', contactData);
  };