import classNames from 'classnames/bind';
//
import { MenuItemParentProps } from '~/types/layout';
//
import styles from '../Header.module.scss';

const cx = classNames.bind(styles);

const MenuItemParent = ({
  title,
  hasChild,
  levelOne,
  children,
}: MenuItemParentProps) => {
  return (
    <div
      className={cx('rounded-md relative pl-1', levelOne ? 'group' : 'parent')}>
      <button
        className={cx(
          'w-full outline-none focus:outline-none px-3 py-1 hover:bg-gray-200 hover:border-gray-400 border-transparent border-2 rounded-md flex items-center bg-white'
        )}>
        <span className='pr-1 font-semibold'>{title}</span>
        {hasChild && (
          <span>
            <svg
              className='fill-current h-4 w-4 transform transition duration-500 ease-in-out'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'>
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </span>
        )}
      </button>
      {hasChild && (
        <div
          className={cx(
            levelOne
              ? 'p-3 border rounded-md transform absolute transition duration-500 ease-in-out origin-top hover:shadow-xl hover:shadow-gray-200 bg-white'
              : 'p-3 border rounded-md absolute top-0 right-0 transition duration-500 ease-in-out origin-top-left left-4 hover:shadow-xl hover:shadow-gray-200 bg-white  opacity-0',
            'child',
            'min-w-192'
          )}>
          {children}
        </div>
      )}
    </div>
  );
};

export default MenuItemParent;
