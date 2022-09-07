import { LayoutMenuNavbar } from '~/types/layout';
//
import TreeMenuItem from './TreeMenuItem';

const menu_navbar: LayoutMenuNavbar[] = [
  {
    id: 'product',
    title: 'SẢN PHẨM',
    hasChild: true,
    levelOne: true,
    child: [
      {
        id: 'dress',
        title: 'Đầm',
        hasChild: true,
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
        child: [],
      },
      {
        id: 'sun-shirt',
        title: 'Áo chống nắng',
        child: [],
      },
      {
        id: 'aodai',
        title: 'Áo dài',
        child: [],
      },
      {
        id: 'trousers',
        title: 'Quần',
        hasChild: true,
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
        child: [],
      },
      {
        id: 'jacket',
        title: 'Áo khoác',
        hasChild: true,
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
        child: [],
      },
      {
        id: 'jumpsuit',
        title: 'Jumpsuit',
        child: [],
      },
      {
        id: 'accessory',
        title: 'Phụ kiện',
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
    ],
  },
  {
    id: 'new_product',
    title: 'SẢN PHẨM MỚI',
    levelOne: true,
    child: [],
  },
  {
    id: 'collection',
    title: 'BỘ SƯU TẬP',
    levelOne: true,
    child: [],
  },
  {
    id: 'sale',
    title: 'SALE',
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
    id: 'blog',
    title: 'BLOG',
    child: [],
  },
];

const MenuNavbar = () => {
  return (
    <div className='hidden md:inline-flex flex-row relative px-0 min-w-[250px] bg-white z-10'>
      {menu_navbar.map((item) => {
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
