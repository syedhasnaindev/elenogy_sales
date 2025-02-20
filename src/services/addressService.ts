import { apiRequest } from './apiService';


// Addresses
export const fetchAddresses = async () => {
  return await apiRequest('/crm/addresses', 'GET');
};

export const createAddress = async (addressData: any) => {
  return await apiRequest('/crm/addresses', 'POST', addressData);
};






























