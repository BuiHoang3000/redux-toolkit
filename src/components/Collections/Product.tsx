import React from 'react';
import {
  INIT_DATA,
  TableWrapper,
  useTableDispatch,
  useTableState,
} from '~/templates/Table';
import { Clothes } from '~/types/product';
import carousel1 from '~/assets/images/new_product_carousel_1.webp';
import carousel2 from '~/assets/images/new_product_carousel_2.webp';
import carousel3 from '~/assets/images/new_product_carousel_3.webp';
import carousel4 from '~/assets/images/new_product_carousel_4.webp';
import carousel5 from '~/assets/images/new_product_carousel_5.webp';
import carousel6 from '~/assets/images/new_product_carousel_6.webp';

const data: Clothes[] = [
  {
    id: 1,
    url: carousel1,
    title: 'SLEEVELESS SHIRT SM91372',
    price: '500.000',
  },
  {
    id: 2,
    url: carousel2,
    title: 'RED SILK DRESS D05462',
    price: '1.200.000',
  },
  {
    id: 3,
    url: carousel3,
    title: 'SLEEVELESS SHIRT SM91372',
    price: '500.000',
  },
  {
    id: 4,
    url: carousel4,
    title: 'DESIGN SHIRT SM91352',
    price: '799.000',
  },
  {
    id: 5,
    url: carousel5,
    title: 'ORGANIC DRESS D05752',
    price: '1.399.000',
  },
  {
    id: 6,
    url: carousel6,
    title: 'SHORT Q05532',
    price: '599.000',
  },
];

const Product = () => {
  const tableState = useTableState();
  const tableDispatch = useTableDispatch();

  React.useEffect(() => {
    if (data && data.length > 0) {
      tableDispatch({
        type: INIT_DATA,
        title: 'DRESS',
        initData: data,
        total: 1,
        view: 'LARGE',
      });
    }
  }, [data, tableDispatch]);

  return (
    <div>
      <TableWrapper>
        <div className='flex flex-wrap'>
          {tableState.data.map((item) => (
            <div
              className={`max-w-[50%] md:max-w-[${
                tableState.view === 'LARGE' ? '25' : '50'
              }%] p-1`}
              key={item.id}
            >
              <img src={item.url} className='w-full' />
              <div className={`text-center bottom-5 py-2 w-full`}>
                <h5 className='text-xs text-gray-500'>{item.title}</h5>
                <p className='text-gray-900 font-semibold'>{item.price}₫</p>
              </div>
            </div>
          ))}
        </div>
      </TableWrapper>
    </div>
  );
};

export default Product;
