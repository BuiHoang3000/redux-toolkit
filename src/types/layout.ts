import { ReactNode } from 'react';

export type MenuItemChildProps = {
  child: LayoutMenuNavbar[];
};

export type MenuItemParentProps = {
  title: string;
  hasChild?: boolean;
  levelOne?: boolean;
  children: ReactNode;
};

export type LayoutMenuNavbar = {
  id: string;
  title: string;
  hasChild?: boolean;
  levelOne?: boolean;
  child: LayoutMenuNavbar[];
};

export type NavbarItemProps = {
  item: LayoutMenuNavbar;
};

export type MenuNavbarProps = {
  data: LayoutMenuNavbar[];
  open: boolean;
  setOpen: (open: boolean) => void;
};

export type TreeNavbarProps = {
  data: LayoutMenuNavbar[];
};
