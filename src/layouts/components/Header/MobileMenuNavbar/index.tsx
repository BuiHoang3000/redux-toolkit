import classNames from 'classnames/bind';
//
import { MenuNavbarProps } from '~/types/layout';
//
import styles from '../Header.module.scss';
import TreeNavbar from './TreeNavbar';

const cx = classNames.bind(styles);

const MobileMenuNavbar = (props: MenuNavbarProps) => {
  const { data, open, setOpen } = props;

  return (
    <div className='md:hidden'>
      {open && (
        <div className='absolute top-0 right-0 min-w-[350px] min-h-screen p-4 flex flex-col bg-black opacity-90 z-50'>
          {/* Button close */}
          <div className='mb-8'>
            <button
              className={cx(
                'outline-none focus:outline-none px-3 py-1 hover:bg-gray-200 hover:border-gray-800 border-transparent border-2 rounded-md flex items-center bg-white float-right',
              )}
              onClick={() => setOpen(!open)}
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
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          <TreeNavbar data={data} />
        </div>
      )}
    </div>
  );
};

export default MobileMenuNavbar;
