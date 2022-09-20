import React from 'react';
import {
  GO_TO_PAGE,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  useTableDispatch,
} from './TableProvider';

type TablePaginationTempProps = {
  current: number;
  total: number;
};

const TablePaginationTemp = (props: TablePaginationTempProps) => {
  // 0. Init
  const { total, current } = props;
  const tableDispatch = useTableDispatch();

  // 1. Handle event click go to page
  const handleGoToPage = (page: number) => {
    tableDispatch({
      type: GO_TO_PAGE,
      goToPage: page,
    });
  };

  // 2. Handle event go to previous page
  const handlePreviousPage = () => {
    tableDispatch({
      type: PREVIOUS_PAGE,
    });
  };

  // 3. Handle event go to next page
  const handleNextPage = () => {
    tableDispatch({
      type: NEXT_PAGE,
    });
  };

  const renderPagination = () => {
    const page: any[] = [];
    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        page.push(
          <button
            key={`page_${i}`}
            className={`px-4 py-2 mx-1 border ${
              i === current ? 'bg-black text-white' : 'bg-gray-100'
            } font-bold hover:bg-black hover:text-white`}
            onClick={() => handleGoToPage(i)}
          >
            {i}
          </button>,
        );
      }
    } else {
      for (let i = current - 2; i <= current + 2; i++) {
        if (i > 0 && i <= total) {
          page.push(
            <button
              key={`page_${i}`}
              className={`px-4 py-2 mx-1 border ${
                i === current ? 'bg-black text-white' : 'bg-gray-100'
              } font-bold hover:bg-black hover:text-white`}
              onClick={() => handleGoToPage(i)}
            >
              {i}
            </button>,
          );
        }
      }

      if (current < total - 3) {
        page.push(
          <span key='page_dot' className='px-4 py-2 mx-1'>
            ...
          </span>,
        );
      }

      if (current < total - 2) {
        page.push(
          <button
            key='page_total'
            className='px-4 py-2 mx-1 border font-bold bg-gray-100 hover:bg-black hover:text-white'
            onClick={() => handleGoToPage(total)}
          >
            {total}
          </button>,
        );
      }
    }

    if (current > 1) {
      page.unshift(
        <button
          key='page_first'
          className='px-4 py-2 mx-1 border bg-gray-100 hover:bg-black hover:text-white'
          onClick={() => handleGoToPage(1)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5'
            />
          </svg>
        </button>,
        <button
          key='page_previous'
          className='px-4 py-2 mx-1 border bg-gray-100 hover:bg-black hover:text-white'
          onClick={() => handlePreviousPage()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </button>,
      );
    }

    if (current < total)
      page.push(
        <button
          key='page_next'
          className='px-4 py-2 mx-1 border bg-gray-100 hover:bg-black hover:text-white'
          onClick={() => handleNextPage()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>,
        <button
          key='page_end'
          className='px-4 py-2 mx-1 border bg-gray-100 hover:bg-black hover:text-white'
          onClick={() => handleGoToPage(total)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>,
      );

    return page;
  };

  return <div className='flex justify-center'>{renderPagination()}</div>;
};

export default React.memo(TablePaginationTemp);
