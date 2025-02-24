import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import RevealDropdown, { RevealDropdownTrigger } from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import useAdvanceTable from 'hooks/useAdvanceTable';

// Interface for breadcrumb items
interface PageBreadcrumbItem {
    label: string;
    url?: string;
    active?: boolean;
}

// Interface for action items
interface ActionItem {
    eventKey: string;
    label: string;
    type: 'redirect' | 'function';
    url?: string;
    callback?: () => void;
    className?: string;
    divider?: boolean;
}

// Interface for the hook result
interface HookResult<T> {
    data: T[];
    loading: boolean;
    error?: Error;
}

// Type for the hook function
type ApiHook<T> = () => HookResult<T>;

// Props interface for the ListDataPage component
interface ListDataPageProps<T> {
    apiHook: ApiHook<T>;
    entityName: string;
    columns: ColumnDef<T>[];
    actions?: ActionItem[];
}

const ListDataPage = <T extends Record<string, any>>({
    apiHook,
    entityName,
    columns,
    actions
}: ListDataPageProps<T>): React.ReactElement => {
    const { data, loading } = apiHook();

    const defaultBreadcrumbItems: PageBreadcrumbItem[] = [
        { label: 'Dashboard', url: '/' },
        { label: entityName, active: true }
    ];

    const table = useAdvanceTable({
        data: data || [],
        columns,
        pageSize: 10,
        pagination: true,
        sortable: true,
        selection: true
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{ height: '100%' }}>
            <PageBreadcrumb items={defaultBreadcrumbItems} />
            <div className="mb-9">
                <h2 className="mb-4">{entityName}</h2>
                <AdvanceTableProvider {...table}>
                    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
                        <AdvanceTable tableProps={{ className: 'phoenix-table fs-9' }} />
                        <AdvanceTableFooter pagination />
                    </div>
                </AdvanceTableProvider>
                {/* {actions.length > 0 && ( // Ensure actions exist before rendering
                    <div className="mt-4">
                        <RevealDropdownTrigger>
                            <RevealDropdown>
                                <ActionDropdownItems actions={actions} />
                            </RevealDropdown>
                        </RevealDropdownTrigger>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default ListDataPage;