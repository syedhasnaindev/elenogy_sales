// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Button from 'components/base/Button';
// import AboutLeadCard from 'components/cards/AboutLeadCard';
// import UserQualifications from 'components/cards/UserQualifications';
// import LeadProfileCard from 'components/cards/LeadProfileCard';
// import PageBreadcrumb from 'components/common/PageBreadcrumb';
// import LeadDeals from 'components/modules/crm/LeadDeals';
// import LeadEmails from 'components/modules/crm/LeadEmails';
// import Tasks from 'components/modules/crm/Tasks';
// import { defaultBreadcrumbItems } from 'data/commonData';
// import { Col, Dropdown, Row } from 'react-bootstrap';
// import LeadAttachments from 'components/modules/crm/LeadAttachments';
// import LeadDetailsNavbar from 'components/modules/crm/LeadDetailsNavbar';
// import { useState } from 'react';
// import LeadDetailsOffcanvas from 'components/modules/crm/LeadDetailsOffcanvas';
// import {
//   faBars,
//   faEllipsis,
//   faEnvelope,
//   faThumbtack
// } from '@fortawesome/free-solid-svg-icons';
// import ScrollSpy from 'components/base/ScrollSpy';
// import { usePersonalInformationById } from 'hooks/usePersonalInformation';
// import { useParams } from 'react-router-dom';
// import UserSetting from './UserSettings';
// import Designation from './Designation';
// import DesignationCard from './DesignationCard';
// import DepartmentCard from './DepartmentCard';
// import CredentialCard from './CredentialCard';
// import RoleCard from './RoleCard';
// import SalaryCard from './SalaryCard';

// const UserDetails = () => {
//   const [openOffcanvas, setOpenOffcanvas] = useState(false);
//   const { userId } = useParams(); // Extract the dynamic parameter
//   console.log(userId, 'User_Id');

//   const { personalInformation, loading } = usePersonalInformationById(
//     userId
//   ) as {
//     personalInformation: any | null;
//     loading: boolean;
//   };
//   console.log(personalInformation.qualification, 'Personal Information');

//   return (
//     <div>
//       <PageBreadcrumb items={defaultBreadcrumbItems} />
//       <div className="pb-9">
//         <Row className="align-items-center justify-content-between g-3 mb-3">
//           <Col xs={12} md="auto">
//             <h2 className="mb-0">User details</h2>
//           </Col>
//           <Col xs={12} md="auto">
//             <div className="d-flex gap-2">
//               <div className="flex-1 d-md-none">
//                 <Button
//                   variant="phoenix-secondary"
//                   className="px-3 text-body-tertiary"
//                   onClick={() => setOpenOffcanvas(true)}
//                 >
//                   <FontAwesomeIcon icon={faBars} />
//                 </Button>
//               </div>
//               {/* <Button
//                 variant="primary"
//                 startIcon={
//                   <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//                 }
//               >
//                 Send an email
//               </Button>
//               <Button variant="phoenix-secondary" className="px-3 px-sm-5">
//                 <FontAwesomeIcon icon={faThumbtack} className="me-0 me-sm-2" />
//                 <span className="d-none d-sm-inline">Shortlist</span>
//               </Button>
//               <Dropdown>
//                 <Dropdown.Toggle
//                   variant="phoenix-secondary"
//                   className="dropdown-caret-none px-3"
//                 >
//                   <FontAwesomeIcon icon={faEllipsis} />
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#!">View Profile</Dropdown.Item>
//                   <Dropdown.Item href="#!">Report</Dropdown.Item>
//                   <Dropdown.Item href="#!">Manage notifications</Dropdown.Item>
//                   <Dropdown.Item href="#!" className="text-danger">
//                     Delete Lead
//                   </Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown> */}
//             </div>
//           </Col>
//         </Row>

//         <Row className="g-0 g-md-4 g-xl-6">
//           <Col md={5} xl={4} className="d-none d-md-block">
//             <div className="sticky-leads-sidebar">
//               <div className="lead-details-offcanvas bg-body scrollbar">
//                 <div className="d-flex justify-content-between align-items-center mb-2 d-md-none">
//                   <h3 className="mb-0">Lead Details </h3>
//                 </div>
//                 <LeadProfileCard
//                   className="mb-3"
//                   name={
//                     personalInformation.First_Name +
//                     ' ' +
//                     personalInformation.Last_Name
//                   }
//                   role=""
//                   company=""
//                   avatarSrc="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
//                 />
//                 <AboutLeadCard
//                   className="mb-3"
//                   login_name={personalInformation.Login_Name}
//                   Personal_Email={personalInformation.Personal_Email}
//                   Secondary_Email={personalInformation.Secondary_Email}
//                   Registered_On={personalInformation.Registered_On}
//                   Mobile={personalInformation.Mobile}
//                   DOB={personalInformation.DOB}
//                   Blood_Group={personalInformation.Blood_Group}
//                   User_Id={personalInformation.User_Id}
//                 />
//                 <UserQualifications
//                   qualifications={personalInformation.qualification}
//                 />
//               </div>
//             </div>
//           </Col>
//           <Col md={7} xl={8}>
//             <div className="lead-details-container">
//               {personalInformation?.user_mappings ? (
//                 <div>
//                   <DepartmentCard
//                     user_mappings={personalInformation?.user_mappings}
//                   />
//                   <DesignationCard
//                     user_mappings={personalInformation?.user_mappings}
//                   />
//                   <RoleCard role={personalInformation?.user_mappings} />
//                   <CredentialCard
//                     user_mappings={personalInformation?.user_mappings}
//                   />
//                   <SalaryCard
//                     user_mappings={personalInformation?.user_mappings}
//                   />
//                 </div>
//               ) : (
//                 <UserSetting User_Id={personalInformation.User_Id} />
//               )}
//             </div>
//           </Col>
//         </Row>
//       </div>
//       <LeadDetailsOffcanvas open={openOffcanvas} setOpen={setOpenOffcanvas} />
//     </div>
//   );
// };

// export default UserDetails;
