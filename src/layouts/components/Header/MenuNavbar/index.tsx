import { TreeNavbarProps } from '~/types/layout';
//
import TreeMenuItem from './TreeMenuItem';

const MenuNavbar = (props: TreeNavbarProps) => {
	const { data } = props;

	return (
		<div className="hidden md:inline-flex flex-row relative px-0 min-w-[250px] bg-white z-10">
			{data.map((item) => {
				return (
					<TreeMenuItem
						key={item.id}
						id={item.id}
						hasChild={item.hasChild}
						levelOne={item.levelOne}
						title={item.title}
						child={item.child}
					/>
				);
			})}
		</div>
	);
};

export default MenuNavbar;
