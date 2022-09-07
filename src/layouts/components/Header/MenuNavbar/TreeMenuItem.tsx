import { LayoutMenuNavbar } from '~/types/layout';
//
import MenuItemChild from './MenuItemChild';
import MenuItemParent from './MenuItemParent';

const TreeMenuItem = (props: LayoutMenuNavbar) => {
  const { title, hasChild, levelOne, child } = props;

  return (
    <div>
      <MenuItemParent title={title} hasChild={hasChild} levelOne={levelOne}>
        <>{child.length > 0 && <MenuItemChild child={child} />}</>
      </MenuItemParent>
    </div>
  );
};

export default TreeMenuItem;
