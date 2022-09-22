import { ReactNode } from 'react';
import TableFilterTemp from './TableFilterTemp';
import TablePaginationTemp from './TablePaginationTemp';
import {
  CHANGE_VIEW,
  FILTER,
  useTableDispatch,
  useTableState,
} from './TableProvider';

type TableWrapperProps = {
  children: ReactNode;
  filter?: () => JSX.Element;
  pagination?: () => JSX.Element;
};

export const TableWrapper = (props: TableWrapperProps) => {
  // Init
  const { children, filter, pagination } = props;
  const tableState = useTableState();
  const tableDispatch = useTableDispatch();

  // Handle event set filter
  const handleSetFilter = (type: string, value: string[]) => {
    tableDispatch({
      type: FILTER,
      filter: {
        ...tableState.filter,
        [type]: value,
      },
    });
  };

  // Handle event set view
  const handleSetView = (type: 'LARGE' | 'MEDIUM') => {
    tableDispatch({
      type: CHANGE_VIEW,
      view: type,
    });
  };

  return (
    <div>
      {filter ? (
        filter()
      ) : (
        <TableFilterTemp
          title={tableState.title || ''}
          listFilter={tableState.filter}
          view={tableState.view || 'LARGE'}
          handleSetFilter={handleSetFilter}
          handleSetView={handleSetView}
        />
      )}
      {children}
      {pagination ? (
        pagination()
      ) : (
        <TablePaginationTemp
          total={tableState.total}
          current={tableState.current}
        />
      )}
    </div>
  );
};
