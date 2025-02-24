import React from 'react';
import { useNavigate } from 'react-router-dom';
import apiHooks from '../../../hooks/apiHooks';
import ListDataPage from '../../../components/pages/ListDataPage';
import RevealDropdown, {
    RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

interface ActionItem {
    eventKey: string;
    label: string;
    type: 'function' | 'redirect'; // Ensure type is restricted
    callback?: () => void;
    url?: string;
    className?: string;
    divider?: boolean;
}

const CRMLeads = () => {
    const navigate = useNavigate(); // React Router hook for navigation

    // Function to return properly typed actions for each row
    const getActions = (lead_id: string): ActionItem[] => [
        {
            eventKey: '1',
            label: 'View',
            type: 'function',
            callback: () => navigate(`/crm/leads/lead-details/${lead_id}`)
        },
        {
            eventKey: '2',
            label: 'Edit',
            type: 'function',
            callback: () => alert(`Editing Lead ${lead_id}`)
        },
        {
            eventKey: '3',
            label: 'Remove',
            type: 'function',
            callback: () => alert(`Removing Lead ${lead_id}`),
            className: 'text-danger'
        }
    ];

    const columns = [
        { accessorKey: 'lead_id', header: 'Lead ID' },
        { accessorKey: 'institute.institute_name', header: 'Institute Name' },
        { accessorKey: 'priority', header: 'Priority' },
        { accessorKey: 'source', header: 'Source' },
        { accessorKey: 'status', header: 'Status' },
        { accessorKey: 'user.username', header: 'Assigned To' },
        { accessorKey: 'created_at', header: 'Created At' },
        {
            id: 'action',
            header: "Actions",
            cell: ({ row }: { row: any }) => (
                <RevealDropdownTrigger style={{ zIndex: '999' }}>
                    <RevealDropdown>
                        <ActionDropdownItems actions={getActions(row.original.lead_id)} />
                    </RevealDropdown>
                </RevealDropdownTrigger>
            ),
            meta: {
                headerProps: { style: { width: '7%' } },
                cellProps: { className: 'text-center' }
            }
        }
    ];

    return <ListDataPage apiHook={apiHooks.useCRMLeads} entityName="CRM Leads" columns={columns} />;
};

export default CRMLeads;
