import React from 'react';
import apiHooks from '../../../hooks/apiHooks';
import ListDataPage from '../../../components/pages/ListDataPage';
import RevealDropdown, {
    RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

const columns = [
    { accessorKey: 'opportunity_id', header: 'Opportunity ID' },
    { accessorKey: 'title', header: 'Title' },
    { accessorKey: 'amount', header: 'Amount' },
    { accessorKey: 'stage', header: 'Stage' },
    { accessorKey: 'probability', header: 'Probability' },
    { accessorKey: 'owner', header: 'Owner' },
    { accessorKey: 'created_at', header: 'Created At' },
    {
        id: 'action',
        header: "Actions",
        cell: () => (
            <RevealDropdownTrigger>
                <RevealDropdown>
                    <ActionDropdownItems actions={actions} />
                </RevealDropdown>
            </RevealDropdownTrigger>
        ),
        meta: {
            headerProps: { style: { width: '7%' } },
            cellProps: { className: 'text-center' }
        }
    }
];

interface ActionItem {
    eventKey: string;
    label: string;
    type: 'function' | 'redirect';
    callback?: () => void;
    url?: string;
    className?: string;
    divider?: boolean;
}

const actions: ActionItem[] = [
    { eventKey: '1', label: 'Edit', type: 'function', callback: () => alert('Editing Institute') },
    { eventKey: '2', label: 'Remove', type: 'function', callback: () => alert('Removing Institute'), className: 'text-danger' },
];

const CRMOpportunities = () => (
    <ListDataPage apiHook={apiHooks.useCRMOpportunities} entityName="CRM Opportunities" columns={columns} actions={actions} />
);

export default CRMOpportunities;
