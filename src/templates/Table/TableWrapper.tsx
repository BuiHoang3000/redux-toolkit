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
  const handleSetFilter = (type: string, value: string) => {
    const condition = [];
    if (tableState.filter) {
      const filter = tableState.filter[type];
      const duplicateFilter = filter.findIndex((f: any) => f === value);
      if (duplicateFilter >= 0) {
        condition.push(filter.filter((f: any) => f !== value));
      } else {
        condition.push(...filter, value);
      }
    }
    tableDispatch({
      type: FILTER,
      filter: {
        ...tableState.filter,
        [type]: condition,
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
