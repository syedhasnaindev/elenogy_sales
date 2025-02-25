import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import { Button, Col, Dropdown, Row } from 'react-bootstrap';
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
import useLeadDetails from '../../../hooks/leadDetailHook'

const LeadDetails = () => {
  const { id } = useParams<{ id: string }>();
const leadId = id || '';  // Ensure a stable value is used

  const [openOffcanvas, setOpenOffcanvas] = useState(false);

  // Fetch lead details and related data using the new API
  const {data,loading }= useLeadDetails(leadId || '') || [];

  // Ensure leadData is not an array before destructuring
  const lead = Array.isArray(data) && data.length > 0 ? data[0] : {};

  const {
    lead_id: currentLead,
    institute: leadInstitute,
    contacts: leadContacts,
    activities: leadActivities,
    communications: leadCommunications,
    opportunities: leadOpportunities
  } = lead;


  // Activity Timeline Component
  const ActivityTimeline = () => (
    <div className="mb-4">
      <h5 className="mb-3">Activity Timeline</h5>
      {leadActivities?.map((activity: { activity_id: Key | null | undefined; activity_type: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; activity_date: string | number | Date; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
        <div key={activity.activity_id} className="timeline-item">
          <div className="d-flex align-items-center mb-2">
            <span className="badge bg-primary me-2">
              {activity.activity_type}
            </span>
            <small className="text-muted">
              {new Date(activity.activity_date).toLocaleDateString()}
            </small>
          </div>
          <p className="mb-0">{activity.description}</p>
        </div>
      ))}
    </div>
  );

  // Opportunity Stages Component
  const OpportunityStages = () => (
    <div className="mb-4">
      <h5 className="mb-3">Opportunity Progress</h5>
      {leadOpportunities?.map((opportunity: { opportunity_id: Key | null | undefined; status: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; valid_from: string | number | Date; valid_to: string | number | Date; probability: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
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
      {leadCommunications?.map((comm: { communication_id: Key | null | undefined; communication_type: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; created_at: string | number | Date; details: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
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

  // Loading and Error States
  if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

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
            <div className="d-flex gap-2">
              <div className="flex-1 d-md-none">
                <Button
                  variant="phoenix-secondary"
                  className="px-3 text-body-tertiary"
                  onClick={() => setOpenOffcanvas(true)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </Button>
              </div>
              <Button
                variant="primary"
              // startIcon={
              //   <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              // }
              >
                Send an email
              </Button>
              <Button variant="phoenix-secondary" className="px-3 px-sm-5">
                <FontAwesomeIcon icon={faThumbtack} className="me-0 me-sm-2" />
                <span className="d-none d-sm-inline">Shortlist</span>
              </Button>
              <Dropdown>
                <Dropdown.Toggle
                  variant="phoenix-secondary"
                  className="dropdown-caret-none px-3"
                >
                  <FontAwesomeIcon icon={faEllipsis} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#!">View Profile</Dropdown.Item>
                  <Dropdown.Item href="#!">Report</Dropdown.Item>
                  <Dropdown.Item href="#!">Manage notifications</Dropdown.Item>
                  <Dropdown.Item href="#!" className="text-danger">
                    Delete Lead
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
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
                  <ActivityTimeline />
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
      <LeadDetailsOffcanvas
        open={openOffcanvas}
        setOpen={setOpenOffcanvas}
      // lead={currentLead}
      />
    </div>
  );
};

export default LeadDetails;