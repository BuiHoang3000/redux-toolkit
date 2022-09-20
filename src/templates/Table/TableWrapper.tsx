import { ReactNode } from 'react';
import TableFilterTemp from './TableFilterTemp';
import TablePaginationTemp from './TablePaginationTemp';
import { useTableState } from './TableProvider';

type TableWrapperProps = {
  children: ReactNode;
  filter?: () => JSX.Element;
  pagination?: () => JSX.Element;
};

export const TableWrapper = (props: TableWrapperProps) => {
  const { children, filter, pagination } = props;
  const tableState = useTableState();

  return (
    <div>
      <div className='relative'>
        {filter ? filter() : <TableFilterTemp title={tableState.title} />}
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
    </div>
  );
};
