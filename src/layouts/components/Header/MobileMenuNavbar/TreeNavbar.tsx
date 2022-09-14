import { TreeNavbarProps } from '~/types/layout';
//
import NavbarItem from './NavbarItem';

const TreeNavbar = (props: TreeNavbarProps) => {
	const { data } = props;

	return (
		<>
			{data.map((item) => {
				if (item.hasChild) {
					return <NavbarItem key={item.id} item={item}></NavbarItem>;
				}
				return <NavbarItem key={item.id} item={item} />;
			})}
		</>
	);
};

export default TreeNavbar;
