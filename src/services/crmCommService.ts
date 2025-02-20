import { apiRequest } from './apiService';



// CRM Communications
export const fetchCrmCommunications = async () => {
    return await apiRequest('/crm/crm-communications', 'GET');
  };
  
  export const createCrmCommunication = async (communicationData: any) => {
    return await apiRequest('/crm/crm-communications', 'POST', communicationData);
  };