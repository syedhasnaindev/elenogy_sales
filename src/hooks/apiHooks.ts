import { useState, useEffect } from 'react';
import * as userService from './../services/userService';
import * as userAuthService from './../services/userAuthService';
import * as crmActivityService from './../services/crmActivityService';
import * as crmCommService from './../services/crmCommService';
import * as crmInstituteService from './../services/crmInstituteService';
import * as crmLeadsService from './../services/crmLeadsService';
import * as crmOpportunityService from './../services/crmOpportunityService';
import * as documentService from './../services/documentService';
import * as addressService from './../services/addressService';
import * as inventoryAllocService from './../services/inventoryAllocService';
import * as inventoryStockService from './../services/inventoryStockService';
import * as inventoryTransactionService from './../services/inventoyrTransactionService';
import * as salesOrdersService from './../services/salesOrders';
import * as salesPaymentsService from './../services/salesPayments';
import * as salesPlanService from './../services/salesPlan';
import * as salesQuotesService from './../services/salesQuotesService';
import * as salesServiceService from './../services/salesServiceService';
import * as salesSubscriptionService from './../services/salesSubscriptionService';
import * as saleContactsService from './../services/saleContactsService';
import * as salesInstitutesService from './../services/salesInstitutesService';
import * as taxService from './../services/taxService';
import * as crmContactService from './../services/crmContactService';
import * as discountService from './../services/discountService';

const useFetchData = (fetchFunction: () => Promise<any[]>) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchFunction();
        setData(response);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [fetchFunction]);

  return { data, loading };
};

const createHook = (fetchFunction: () => Promise<any[]>) => () => useFetchData(fetchFunction);

// Export hooks dynamically
const apiHooks = {
  useUsers: createHook(userService.fetchUsers),
  useFetchCrmActivitiesByTypeById: (related_to_type: string, related_to_id: string) =>
    useFetchData(() => crmActivityService.fetchCrmActivitiesByTypeById(related_to_type, related_to_id)),

  useCrmContact: createHook(crmContactService.fetchCrmContact),
  useUserAuth: createHook(userAuthService.fetchUser),
  useCRMActivities: createHook(crmActivityService.fetchCrmActivities),
  useCRMCommunications: createHook(crmCommService.fetchCrmCommunications),
  useCRMInstitutes: createHook(crmInstituteService.fetchCrmInstitutes),
  useCRMLeads: createHook(crmLeadsService.fetchCrmLeads),
  useCRMOpportunities: createHook(crmOpportunityService.fetchCrmOpportunities),
  useDocuments: createHook(documentService.fetchDocuments),
  useAddresses: createHook(addressService.fetchAddresses),
  useInventoryAllocations: createHook(inventoryAllocService.fetchInventoryAllocations),
  useInventoryStock: createHook(inventoryStockService.fetchInventoryStock),
  useInventoryTransactions: createHook(inventoryTransactionService.fetchInventoryTransactions),
  useSalesOrders: createHook(salesOrdersService.fetchSalesOrders),
  useSalesPayments: createHook(salesPaymentsService.fetchSalesPayments),
  useSalesPlans: createHook(salesPlanService.fetchSalesPlans),
  useSalesQuotes: createHook(salesQuotesService.fetchCrmSalesQuotes),
  useSalesServices: createHook(salesServiceService.fetchSalesServices),
  useSalesSubscriptions: createHook(salesSubscriptionService.fetchSalesSubscriptions),
  useSalesContacts: createHook(saleContactsService.fetchSalesContacts),
  useSalesInstitutes: createHook(salesInstitutesService.fetchSalesInstitutes),
  useTaxes: createHook(taxService.fetchTaxes),
  useDiscounts: createHook(discountService.fetchDiscounts),
};

export default apiHooks;
