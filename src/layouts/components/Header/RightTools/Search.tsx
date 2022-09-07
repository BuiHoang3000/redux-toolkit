import classNames from 'classnames/bind';
import React from 'react';
//
import { Input } from '~/templates/Input';
//
import styles from '../Header.module.scss';

const cx = classNames.bind(styles);

const Search = () => {
  const [search, setSearch] = React.useState('');

  return (
    <div className={cx('rounded-md relative', 'group')}>
      <span
        className={
          'w-full outline-none focus:outline-none px-3 py-1 bg-white hover:bg-gray-200 hover:border-gray-400 border-transparent border-2 rounded-md flex items-center cursor-pointer'
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </span>
      <span
        className={cx(
          'flex items-center p-3 bg-white border rounded-md transform absolute transition duration-500 ease-in-out origin-top-right right-0 hover:shadow-xl hover:shadow-gray-200',
          'child',
        )}
      >
        <Input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className='ml-1 px-2 py-1 hover:bg-gray-200 hover:border-gray-400 border-transparent border-2 rounded-md'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default Search;
