import { apiRequest } from './apiService';



// CRM Leads
export const fetchCrmLeads = async () => {
    return await apiRequest('/crm/leads', 'GET');
  };
export const fetchCrmLeadsById = async (leadId: any) => {
    return await apiRequest(`/crm/leads/${leadId}`, 'GET' );
  };
  
  export const createCrmLead = async (leadData: any) => {
    return await apiRequest('/crm/leads', 'POST', leadData);
  };