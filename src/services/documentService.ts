import { apiRequest } from './apiService';


// Documents
export const fetchDocuments = async () => {
    return await apiRequest('/crm/documents', 'GET');
  };
  
  export const createDocument = async (documentData: any) => {
    return await apiRequest('/crm/documents', 'POST', documentData);
  };