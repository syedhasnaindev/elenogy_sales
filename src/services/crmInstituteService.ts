import { apiRequest } from './apiService';



// CRM Institutes
export const fetchCrmInstitutes = async () => {
    return await apiRequest('/crm/crm-institutes', 'GET');
  };
  
  export const createCrmInstitute = async (instituteData: any) => {
    return await apiRequest('/crm/crm-institutes', 'POST', instituteData);
  };