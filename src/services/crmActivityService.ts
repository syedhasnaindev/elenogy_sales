import { apiRequest } from './apiService';


// CRM Activities

export const fetchCrmActivities = async () => {
  return await apiRequest('/crm/crm-activities', 'GET');
};

export const fetchCrmActivitiesByTypeById = async (
  related_to_type: string,
  related_to_id: string
): Promise<any> => {
  return await apiRequest('/crm/crm-activities', 'POST', { related_to_type, related_to_id });
};


export const createCrmActivity = async (activityData: any) => {
  return await apiRequest('/crm/crm-activities', 'POST', activityData);
};