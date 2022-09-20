import { ReactNode } from 'react';
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
        {filter && filter()}
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
