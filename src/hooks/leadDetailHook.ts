import { useState, useEffect } from 'react';
import axios from 'axios';
import {fetchCrmLeadsById} from '../services/crmLeadsService'

interface LeadDetails {
  lead_id: string;
  natural_key: string;
  crm_institute_id: string;
  status: string;
  priority: string;
  source: string;
  created_at: string;
  institute: {
    crm_institute_id: string;
    institute_name: string;
    status: string;
    address: string;
  };
  contacts: {
    contact_id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
  }[];
  activities: {
    activity_id: string;
    activity_type: string;
    description: string;
    activity_date: string;
  }[];
  communications: {
    communication_id: string;
    communication_type: string;
    details: string;
    created_at: string;
  }[];
  opportunities: {
    opportunity_id: string;
    status: string;
    probability: number;
    valid_from: string;
    valid_to: string;
  }[];
}

const useLeadDetails = (leadId: string) => {
  const [data, setData] = useState<LeadDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!leadId) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetchCrmLeadsById(leadId);
        setData(response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [leadId]);

  return { data, loading, error };
};

export default useLeadDetails;