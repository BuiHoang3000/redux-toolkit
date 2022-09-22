import { ReactNode } from 'react';
import TableFilterTemp from './TableFilterTemp';
import TablePaginationTemp from './TablePaginationTemp';
import { FILTER, useTableDispatch, useTableState } from './TableProvider';

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

  return (
    <div>
      {filter ? (
        filter()
      ) : (
        <TableFilterTemp
          title={tableState.title || ''}
          listFilter={tableState.filter}
          handleSetFilter={handleSetFilter}
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
