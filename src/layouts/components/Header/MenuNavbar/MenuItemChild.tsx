import classNames from 'classnames/bind';
import { Fragment } from 'react';
//
import { MenuItemChildProps } from '~/types/layout';
//
import styles from '../Header.module.scss';
import TreeMenuItem from './TreeMenuItem';

const cx = classNames.bind(styles);

const MenuItemChild = ({ child }: MenuItemChildProps) => {
  return (
    <>
      {child.map((item: any) => (
        <Fragment key={item.id}>
          {item.hasChild ? (
            <TreeMenuItem
              id={item.id}
              hasChild={item.hasChild}
              title={item.title}
              child={item.child}
            />
          ) : (
            <button className={cx('pl-1 font-semibold w-full')}>
              <span
                className={cx(
                  'w-full flex flex-col rounded-md px-3 py-1 text-left hover:bg-gray-200 hover:border-gray-400 border-transparent border-2',
                )}
              >
                {item.title}
              </span>
            </button>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default MenuItemChild;
