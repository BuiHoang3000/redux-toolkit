import classNames from 'classnames/bind';
//
import styles from '../Header.module.scss';

const cx = classNames.bind(styles);

const Account = () => {
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
            d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      </span>
      <span
        className={cx(
          'p-3 bg-white border rounded-md transform absolute transition duration-500 ease-in-out origin-top-right right-0 hover:shadow-xl hover:shadow-gray-200',
          'child',
        )}
      >
        <button
          className={cx(
            'w-full outline-none focus:outline-none px-3 py-1 bg-white hover:bg-gray-200 hover:border-gray-400 border-transparent border-2 rounded-md flex items-center cursor-pointer',
          )}
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
              d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
            />
          </svg>
          <span className='pl-1 font-semibold'>Login</span>
        </button>
        <button
          className={cx(
            'w-full outline-none focus:outline-none px-3 py-1 bg-white hover:bg-gray-200 hover:border-gray-400 border-transparent border-2 rounded-md flex items-center cursor-pointer',
          )}
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
              d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
            />
          </svg>
          <span className='pl-1 font-semibold'>Logout</span>
        </button>
      </span>
    </div>
  );
};

export default Account;
