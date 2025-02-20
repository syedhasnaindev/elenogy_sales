import { apiRequest } from './apiService';


// CRM Activities

export const fetchCrmActivities = async () => {
    return await apiRequest('/crm/crm-activities', 'GET');
  };
  
  export const createCrmActivity = async (activityData: any) => {
    return await apiRequest('/crm/crm-activities', 'POST', activityData);
  };