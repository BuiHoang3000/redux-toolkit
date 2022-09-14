import classNames from 'classnames/bind';
import React from 'react';
//
import { NavbarItemProps } from '~/types/layout';
//
import styles from '../Header.module.scss';
import TreeNavbar from './TreeNavbar';

const cx = classNames.bind(styles);

const NavbarItem = (props: NavbarItemProps) => {
	const { item } = props;
	const [isShowChild, setIsShowChild] = React.useState(false);
	return (
		<div className="pl-4">
			<button
				className={cx(
					'inline-flex items-center relative outline-none focus:outline-none px-3 py-1 my-2 text-white',
					'after:absolute after:bg-white after:w-full after:h-0.5 after:left-0 after:bottom-0 after:origin-bottom-right after:transition-transform',
					'hover:after:origin-bottom-left',
					'after:scale-x-0 hover:after:scale-x-100',
				)}
				onClick={() => setIsShowChild(!isShowChild)}>
				<span className="pr-1 font-semibold">{item.title}</span>
				{item.hasChild && (
					<span>
						<svg
							className={`fill-current h-4 w-4 transform transition duration-500 ease-in-out ${
								isShowChild ? 'rotate-180' : 'rotate-0'
							}`}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20">
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</span>
				)}
			</button>
			{isShowChild && (
				<div>
					<TreeNavbar data={item.child} />
				</div>
			)}
		</div>
	);
};

export default NavbarItem;
