import { apiRequest } from './apiService2';

export const registerUser = async (userData: any) => {
    return await apiRequest('/register', 'POST', userData);
  };
  
  export const loginUser = async (credentials: any) => {
    return await apiRequest('/login', 'POST', credentials);
  };
  
  export const fetchUser = async () => {
    return await apiRequest('/user', 'GET');
  };
  
  export const logoutUser = async () => {
    return await apiRequest('/logout', 'POST');
  };
  
  export const refreshUserToken = async () => {
    return await apiRequest('/refresh', 'POST');
  };