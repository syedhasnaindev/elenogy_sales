import { useState } from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faEllipsis, 
  faEnvelope, 
  faThumbtack 
} from '@fortawesome/free-solid-svg-icons';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import LeadProfileCard from 'components/cards/crm/LeadProfileCard ';
import AboutLeadCard from 'components/cards/crm/AboutLeadCard ';
import LeadAddressCard from 'components/cards/crm/LeadAddressCard ';
import LeadDetailsNavbar from 'components/modules/crm/LeadDetailsNavbar';
import LeadDetailsOffcanvas from 'components/modules/crm/LeadDetailsOffcanvas';
import ScrollSpy from 'components/base/ScrollSpy';
import apiHooks from '../../../hooks/apiHooks';
import { defaultBreadcrumbItems } from 'data/commonData';
import { useParams } from 'react-router-dom';


const LeadDetails = () => {
  
  const { leadId } = useParams<{ leadId: string }>();
  const [openOffcanvas, setOpenOffcanvas] = useState(false);
  
  // Fetch all related data using hooks
  const { data: leads } = apiHooks.useCRMLeads();
  const { data: institutes } = apiHooks.useCRMInstitutes();
  const { data: contacts } = apiHooks.useCrmContact();
  // const { data: activities } = apiHooks.useFetchCrmActivitiesByTypeById('leads','1');
  const { data: communications } = apiHooks.useCRMCommunications();
  const { data: opportunities } = apiHooks.useCRMOpportunities();

  // Find current lead data
  const currentLead = leads?.find(lead => lead.lead_id === leadId);
  const leadInstitute = institutes?.find(inst => 
    inst.crm_institute_id === currentLead?.crm_institute_id
  );
  const leadContacts = contacts?.filter(contact => 
    contact.crm_institute_id === currentLead?.crm_institute_id
  );
  // const leadActivities = activities?.filter(activity => 
  //   activity.related_to_id === leadId
  // );
  const leadCommunications = communications?.filter(comm => 
    comm.related_to_id === leadId || comm.related_to_id === leadInstitute?.crm_institute_id
  );
  const leadOpportunities = opportunities?.filter(opp => 
    opp.crm_institute_id === currentLead?.crm_institute_id
  );

  // Activity Timeline Component
  // const ActivityTimeline = () => (
  //   <div className="mb-4">
  //     <h5 className="mb-3">Activity Timeline</h5>
  //     {leadActivities?.map(activity => (
  //       <div key={activity.activity_id} className="timeline-item">
  //         <div className="d-flex align-items-center mb-2">
  //           <span className="badge bg-primary me-2">
  //             {activity.activity_type}
  //           </span>
  //           <small className="text-muted">
  //             {new Date(activity.activity_date).toLocaleDateString()}
  //           </small>
  //         </div>
  //         <p className="mb-0">{activity.description}</p>
  //       </div>
  //     ))}
  //   </div>
  // );

  // Opportunity Stages Component
  const OpportunityStages = () => (
    <div className="mb-4">
      <h5 className="mb-3">Opportunity Progress</h5>
      {leadOpportunities?.map(opportunity => (
        <div key={opportunity.opportunity_id} className="card mb-2">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <span>{opportunity.status}</span>
              <small>
                {new Date(opportunity.valid_from).toLocaleDateString()} - 
                {opportunity.valid_to === '9999-12-31' ? 'Present' : 
                 new Date(opportunity.valid_to).toLocaleDateString()}
              </small>
            </div>
            <div className="progress mt-2">
              <div 
                className="progress-bar" 
                role="progressbar" 
                style={{ width: `${opportunity.probability}%` }}
              >
                {opportunity.probability}%
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Communication History Component
  const CommunicationHistory = () => (
    <div className="mb-4">
      <h5 className="mb-3">Communication History</h5>
      {leadCommunications?.map(comm => (
        <div key={comm.communication_id} className="card mb-2">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <strong>{comm.communication_type}</strong>
              <small className="text-muted">
                {new Date(comm.created_at).toLocaleDateString()}
              </small>
            </div>
            <p className="mb-0 mt-2">{comm.details}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="pb-9">
        <Row className="align-items-center justify-content-between g-3 mb-3">
          <Col xs={12} md="auto">
            <h2 className="mb-0">
              {currentLead?.natural_key || 'Loading Lead...'}
            </h2>
          </Col>
          <Col xs={12} md="auto">
            {/* ... existing header buttons ... */}
          </Col>
        </Row>

        <Row className="g-0 g-md-4 g-xl-6">
          <Col md={5} xl={4} className="d-none d-md-block">
            <div className="sticky-leads-sidebar">
              <div className="lead-details-offcanvas bg-body scrollbar">
                <LeadProfileCard 
                  lead={currentLead} 
                  institute={leadInstitute}
                />
                <AboutLeadCard 
                  lead={currentLead} 
                  contacts={leadContacts}
                />
                <LeadAddressCard 
                  address={leadInstitute?.address} 
                />
              </div>
            </div>
          </Col>
          
          <Col md={7} xl={8}>
            <div className="lead-details-container">
              <ScrollSpy>
                <LeadDetailsNavbar />

                <ScrollSpy.Content
                  id="activities"
                  className="lead-details-scrollspy mb-8"
                >
                  {/* <ActivityTimeline /> */}
                </ScrollSpy.Content>

                <ScrollSpy.Content
                  id="opportunities"
                  className="lead-details-scrollspy mb-8"
                >
                  <OpportunityStages />
                </ScrollSpy.Content>

                <ScrollSpy.Content
                  id="communications"
                  className="lead-details-scrollspy mb-8"
                >
                  <CommunicationHistory />
                </ScrollSpy.Content>

                <ScrollSpy.Content
                  id="documents"
                  className="lead-details-scrollspy"
                >
                  {/* Documents component using documentService */}
                </ScrollSpy.Content>
              </ScrollSpy>
            </div>
          </Col>
        </Row>
      </div>
      {/* <LeadDetailsOffcanvas 
        open={openOffcanvas} 
        setOpen={setOpenOffcanvas}
        // lead={currentLead}
      /> */}
    </div>
  );
};

export default LeadDetails;