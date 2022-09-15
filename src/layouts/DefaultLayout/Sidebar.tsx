import React from 'react';
//
import {
  LayoutMenuNavbar,
  NavbarItemProps,
  TreeNavbarProps,
} from '~/types/layout';

const menu_navbar: LayoutMenuNavbar[] = [
  {
    id: 'sale',
    title: 'Sale',
    hasChild: true,
    levelOne: true,
    child: [
      {
        id: 'sale_1',
        title: 'Sale 50%',
        child: [],
      },
      {
        id: 'sale_2',
        title: 'Sale 70%',
        child: [],
      },
      {
        id: 'sale_3',
        title: 'Đồng giá chỉ 99k',
        child: [],
      },
    ],
  },
  {
    id: 'dress',
    title: 'Đầm',
    hasChild: true,
    levelOne: true,
    child: [
      {
        id: 'dress_1',
        title: 'Đầm suông',
        child: [],
      },
      {
        id: 'dress_2',
        title: 'Đầm dáng A',
        child: [],
      },
      {
        id: 'dress_3',
        title: 'Đầm ôm',
        child: [],
      },
      {
        id: 'dress_4',
        title: 'Đầm maxi',
        child: [],
      },
    ],
  },
  {
    id: 'shirt',
    title: 'Áo sơ mi',
    hasChild: true,
    levelOne: true,
    child: [
      {
        id: 'shirt_1',
        title: 'Dài tay',
        child: [],
      },
      {
        id: 'shirt_2',
        title: 'Ngắn tay',
        child: [],
      },
      {
        id: 'shirt_3',
        title: 'Tay lỡ',
        child: [],
      },
      {
        id: 'shirt_4',
        title: 'Áo kiểu',
        child: [],
      },
    ],
  },
  {
    id: 't-shirt',
    title: 'Áo phông',
    levelOne: true,
    child: [],
  },
  {
    id: 'sun-shirt',
    title: 'Áo chống nắng',
    levelOne: true,
    child: [],
  },
  {
    id: 'aodai',
    title: 'Áo dài',
    levelOne: true,
    child: [],
  },
  {
    id: 'trousers',
    title: 'Quần',
    hasChild: true,
    levelOne: true,
    child: [
      {
        id: 'trousers_1',
        title: 'Quần dài',
        child: [],
      },
      {
        id: 'trousers_2',
        title: 'Quần jeans',
        child: [],
      },
      {
        id: 'trousers_3',
        title: 'Quần short',
        child: [],
      },
    ],
  },
  {
    id: 'pleat',
    title: 'Chân váy',
    hasChild: true,
    levelOne: true,
    child: [
      {
        id: 'pleat_1',
        title: 'Chân váy xếp li',
        child: [],
      },
      {
        id: 'pleat_2',
        title: 'Chân váy bút chì',
        child: [],
      },
      {
        id: 'pleat_3',
        title: 'Chân váy chữ A',
        child: [],
      },
    ],
  },
  {
    id: 'sweater',
    title: 'Áo len',
    levelOne: true,
    child: [],
  },
  {
    id: 'jacket',
    title: 'Áo khoác',
    hasChild: true,
    levelOne: true,
    child: [
      {
        id: 'jacket_1',
        title: 'Áo phao',
        child: [],
      },
      {
        id: 'jacket_2',
        title: 'Áo vest',
        child: [],
      },
      {
        id: 'jacket_3',
        title: 'Măng tô',
        child: [],
      },
      {
        id: 'jacket_4',
        title: 'Áo khoác kiểu',
        child: [],
      },
    ],
  },
  {
    id: 'set',
    title: 'Set bộ',
    levelOne: true,
    child: [],
  },
  {
    id: 'jumpsuit',
    title: 'Jumpsuit',
    levelOne: true,
    child: [],
  },
  {
    id: 'accessory',
    title: 'Phụ kiện',
    levelOne: true,
    hasChild: true,
    child: [
      {
        id: 'accessory_1',
        title: 'Túi xách',
        child: [],
      },
      {
        id: 'accessory_2',
        title: 'Giày',
        child: [],
      },
    ],
  },
];

const NavbarItem = (props: NavbarItemProps) => {
  const { item } = props;
  const [isShowChild, setIsShowChild] = React.useState(false);
  return (
    <div>
      <button
        className={
          'inline-flex items-center relative outline-none focus:outline-none px-3 py-1 my-1 after:absolute after:bg-white after:w-full after:h-0.5 after:left-0 after:bottom-0 after:origin-bottom-right after:transition-transform hover:after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100'
        }
        onClick={() => setIsShowChild(!isShowChild)}
      >
        <span
          className={`${item.levelOne ? 'font-semibold' : 'text-gray-400'}`}
        >
          {item.title}
        </span>
      </button>
      <div>
        <TreeNavbar data={item.child} />
      </div>
    </div>
  );
};

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

const Sidebar = () => {
  return (
    <div className='hidden md:block min-w-[25%]'>
      <TreeNavbar data={menu_navbar} />
    </div>
  );
};

export default Sidebar;
