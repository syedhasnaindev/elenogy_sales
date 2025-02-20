import { apiRequest } from './apiService';

// User Management
export const fetchUsers = async () => {
    return await apiRequest('/users', 'GET');
  };
export const verifyUsers = async () => {
    return await apiRequest('/verify', 'GET');
  };
  
  export const createUser = async (userData: any) => {
    return await apiRequest('/users', 'POST', userData);
  };