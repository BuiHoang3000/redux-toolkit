import { ReactNode } from 'react';
import { useTableState } from './TableProvider';

type TableWrapperProps = {
  children: ReactNode;
  filter?: () => JSX.Element;
  pagination?: () => JSX.Element;
};

export const TableWrapper = (props: TableWrapperProps) => {
  const { children, filter, pagination } = props;
  const TableState = useTableState();

  return (
    <div>
      <div className='relative'>
        {filter && filter()}
        {children}
        {pagination && pagination()}
      </div>
    </div>
  );
};
