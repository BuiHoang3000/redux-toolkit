import Account from './Account';
import Cart from './Cart';
import Search from './Search';

const RightTools = () => {
  return (
    <div className='inline-flex mr-8'>
      <span
        className={
          'flex items-center w-full outline-none focus:outline-none px-3 py-1 bg-white hover:bg-gray-200 hover:border-gray-400 border-transparent border-2 rounded-md cursor-pointer md:hidden'
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
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </span>
      <Search />
      <Account />
      <Cart />
    </div>
  );
};

export default RightTools;
