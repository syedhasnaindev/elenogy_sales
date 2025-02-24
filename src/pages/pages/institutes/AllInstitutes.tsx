import React from 'react';
import apiHooks from '../../../hooks/apiHooks';
import ListDataPage from '../../../components/pages/ListDataPage';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

const columns = [
    { accessorKey: 'crm_institute_id', header: 'Institute ID' },
    { accessorKey: 'institute_name', header: 'Institute Name' },
    { accessorKey: 'status', header: 'Status' },
    { accessorKey: 'assigned_to', header: 'Assigned To' },
    { accessorKey: 'created_at', header: 'Created At' },
    {
        id: 'action',
        header:"Actions",
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

const AllInstitutes = () => (
    <ListDataPage apiHook={apiHooks.useCRMInstitutes} entityName="CRM Institutes" columns={columns} actions={actions} />
);

export default AllInstitutes;
