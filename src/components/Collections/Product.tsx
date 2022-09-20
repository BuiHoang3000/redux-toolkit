import React from 'react';
import {
  INIT_DATA,
  TableWrapper,
  useTableDispatch,
  useTableState,
} from '~/templates/Table';
import { Clothes } from '~/types/product';

const data: Clothes[] = [
  {
    id: 1,
    name: 'PARTY DRESS D09699',
    price: 1599000,
  },
  {
    id: 2,
    name: 'DESIGN DRESS D09682',
    price: 1000000,
  },
];

const Product = () => {
  const tableState = useTableState();
  const tableDispatch = useTableDispatch();

  React.useEffect(() => {
    if (data && data.length > 0) {
      tableDispatch({
        type: INIT_DATA,
        initData: data,
        total: 20,
      });
    }
  }, [data, tableDispatch]);

  const filter = () => <div>Filter</div>;

  return (
    <div>
      <TableWrapper filter={filter}>product</TableWrapper>
    </div>
  );
};

export default Product;
