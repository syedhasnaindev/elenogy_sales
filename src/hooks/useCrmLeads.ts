import { useState, useEffect } from 'react';
import { fetchCrmLeads } from './../services/crmLeadsService';

export const useCrmLeads = () => {
  const [crm_leads, setCrmLeads] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const data = await fetchCrmLeads();
        setCrmLeads(data);
      } catch (error) {
        console.error('Failed to fetch departments:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDepartments();
  }, []);

  return { crm_leads, loading };
};
