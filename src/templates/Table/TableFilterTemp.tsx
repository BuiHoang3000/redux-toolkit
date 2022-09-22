import React from 'react';

type TableFilterTempProps = {
  title: string;
  listFilter: any;
  handleSetFilter: (type: string, value: string[]) => void;
};

const SIZE_CLOTHES = 'size';
const COLOR_CLOTHES = 'color';
const PRICE_CLOTHES = 'price';

const SIZE = [
  { key: 'SIZE_2', value: 'Size 2' },
  { key: 'SIZE_4', value: 'Size 4' },
  { key: 'SIZE_6', value: 'Size 6' },
  { key: 'SIZE_8', value: 'Size 8' },
  { key: 'SIZE_10', value: 'Size 10' },
  { key: 'SIZE_12', value: 'Size 12' },
  { key: 'SIZE_14', value: 'Size 14' },
  { key: 'FREE_SIZE', value: 'Free size' },
];

const COLOR = [
  { key: 'BLUE', value: 'sky-500' },
  { key: 'RED', value: 'red-600' },
  { key: 'VIOLET', value: 'violet-700' },
  { key: 'YELLOW', value: 'yellow-400' },
  { key: 'WHITE', value: 'white' },
  { key: 'BLACK', value: 'black' },
  { key: 'BROWN', value: 'amber-900' },
  { key: 'PINK', value: 'pink-600' },
  { key: 'GRAY', value: 'gray-600' },
  { key: 'GREEN', value: 'green-600' },
];

const PRICE = [
  { key: 'ALL', value: 'All' },
  { key: 'LESS_THAN_500', value: 'Less than 500.000đ' },
  {
    key: 'LESS_THAN_1000',
    value: 'From 500.000đ to 1.000.000đ',
    active: false,
  },
  {
    key: 'LESS_THAN_1500',
    value: 'From 1.000.000đ to 1.500.000đ',
    active: false,
  },
  {
    key: 'LESS_THAN_2000',
    value: 'From 1.500.000đ to 2.000.000đ',
    active: false,
  },
  {
    key: 'LESS_THAN_3000',
    value: 'From 2.000.000đ to 3.000.000đ',
    active: false,
  },
  { key: 'MORE_THAN_3000', value: 'More than 3.000.000đ' },
];

const TableFilterTemp = (props: TableFilterTempProps) => {
  // Init
  const { title, listFilter, handleSetFilter } = props;
  const [showFilter, setShowFilter] = React.useState('');

  // Handle click filter button
  const handleFilterClick = (type: string) => {
    if (type === showFilter) {
      setShowFilter('');
    } else {
      setShowFilter(type);
    }
  };

  // Handle change size and color
  const handleColorOrSizeChange = (type: string, value: string) => {
    const condition: string[] = [];
    if (listFilter) {
      const filter = listFilter[type];
      if (filter === undefined || filter.length === 0) {
        condition.push(value);
      } else {
        const duplicateFilter = filter.findIndex((f: any) => f === value);
        if (duplicateFilter >= 0) {
          condition.push(...filter.filter((f: any) => f !== value));
        } else {
          condition.push(...filter, value);
        }
      }
    } else {
      condition.push(value);
    }
    handleSetFilter(type, condition);
  };

  // Handle change checkbox price
  const handlePriceChange = (key: string) => {
    const priceClone = [...PRICE];
    const priceCondition: string[] = [];
    if (key === 'ALL') {
      const resultPrice = priceClone.map((item) => {
        if (item.key !== 'ALL') {
          item.active = !priceClone[0].active;
        }
        return item;
      });
      priceClone[0].active = !priceClone[0].active;
    } else {
      const priceItem = priceClone.find((item) => item.key === key);
      if (priceItem) {
        let countCheck = 0;
        priceItem.active = !priceItem?.active;
        priceClone.forEach((item) => {
          if (item.active) countCheck++;
        });
        if (countCheck === priceClone.length - 1) {
          priceClone[0].active = !priceClone[0].active;
        }
      }
    }
    priceClone.forEach((item) => {
      if (item.active) priceCondition.push(item.key);
    });
    handleSetFilter(PRICE_CLOTHES, priceCondition);
  };

  return (
    <div>
      <h2 className='font-bold text-lg'>{title}</h2>
      <div className='-ml-3 flex flex-col md:flex-row items-start'>
        <div className='w-full md:grow md:w-auto'>
          <div className='flex'>
            <button
              className='w-1/3 px-3 py-1 mb-1 text-sm sm:text-base hover:border-b-gray-400 focus:border-b-gray-400 border-transparent border-2 flex items-center'
              onClick={() => handleFilterClick(SIZE_CLOTHES)}
            >
              <span className='pr-1 font-semibold'>Size</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className={`w-3 h-3 ${
                  showFilter === SIZE_CLOTHES ? '-rotate-90' : 'rotate-90'
                }`}
              >
                <path
                  fillRule='evenodd'
                  d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            <button
              className='w-1/3 px-3 py-1 mb-1 text-sm sm:text-base hover:border-b-gray-400 focus:border-b-gray-400 border-transparent border-2 flex items-center'
              onClick={() => handleFilterClick(COLOR_CLOTHES)}
            >
              <span className='pr-1 font-semibold'>Color</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className={`w-3 h-3 ${
                  showFilter === COLOR_CLOTHES ? '-rotate-90' : 'rotate-90'
                }`}
              >
                <path
                  fillRule='evenodd'
                  d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            <button
              className='w-1/3 px-3 py-1 mb-1 text-sm sm:text-base hover:border-b-gray-400 focus:border-b-gray-400 border-transparent border-2 flex items-center'
              onClick={() => handleFilterClick(PRICE_CLOTHES)}
            >
              <span className='pr-1 font-semibold'>Price</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className={`w-3 h-3 ${
                  showFilter === PRICE_CLOTHES ? '-rotate-90' : 'rotate-90'
                }`}
              >
                <path
                  fillRule='evenodd'
                  d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
          {showFilter === SIZE_CLOTHES && (
            <div className='p-3 w-full flex flex-wrap border-2 rounded-md bg-white'>
              {SIZE.map((item) => (
                <button
                  key={item.key}
                  className={`m-1 px-3 py-1 text-sm sm:text-base ${
                    listFilter &&
                    listFilter.size &&
                    listFilter.size.includes(item.key)
                      ? 'bg-black text-white border-black'
                      : 'bg-gray-100 border-gray-400'
                  } border-2 rounded-md flex items-center`}
                  onClick={() =>
                    handleColorOrSizeChange(SIZE_CLOTHES, item.key)
                  }
                >
                  {item.value}
                </button>
              ))}
            </div>
          )}
          {showFilter === COLOR_CLOTHES && (
            <div className='p-3 w-full flex flex-wrap border-2 rounded-md bg-white'>
              {COLOR.map((item) => (
                <div
                  key={item.key}
                  className={`h-8 w-8 m-1 flex justify-center items-center ${
                    listFilter &&
                    listFilter.color &&
                    listFilter.color.includes(item.key)
                      ? `bg-${item.value} border-2 rounded-2xl`
                      : ''
                  }`}
                  onClick={() =>
                    handleColorOrSizeChange(COLOR_CLOTHES, item.key)
                  }
                >
                  <div
                    className={`h-6 w-6 bg-${item.value} border-2 rounded-xl`}
                  ></div>
                </div>
              ))}
            </div>
          )}
          {showFilter === PRICE_CLOTHES && (
            <div className='p-3 w-full border-2 rounded-md bg-white'>
              {PRICE.map((item) => (
                <div key={item.key}>
                  <input
                    type='checkbox'
                    className='mr-4'
                    id={item.key}
                    defaultChecked={
                      listFilter &&
                      listFilter.price &&
                      listFilter.price.includes(item.key)
                    }
                    onChange={() => handlePriceChange(item.key)}
                  />
                  <label htmlFor={item.key}>{item.value}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='min-w-[80px]'>
          <button className='p-3 md:p-2 rounded-lg hover:bg-gray-300'>
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
                d='M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5'
              />
            </svg>
          </button>
          <button className='p-3 md:p-2 rounded-lg hover:bg-gray-300'>
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
                d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableFilterTemp;
