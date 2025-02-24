import { apiRequest } from './apiService';


// CRM Activities

export const fetchCrmContact = async () => {
    return await apiRequest('/crm/crm-contacts', 'GET');
  };
  
  export const createCrmContact = async (contactData: any) => {
    return await apiRequest('/crm/crm-contacts', 'POST', contactData);
  };