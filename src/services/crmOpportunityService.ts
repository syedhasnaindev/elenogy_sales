import { apiRequest } from './apiService';


// CRM Opportunities
export const fetchCrmOpportunities = async () => {
    return await apiRequest('/crm/crm-opportunities', 'GET');
  };
  
  export const createCrmOpportunity = async (opportunityData: any) => {
    return await apiRequest('/crm/crm-opportunities', 'POST', opportunityData);
  };