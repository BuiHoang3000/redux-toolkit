import React from 'react';

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

const ProductInformation = () => {
  // Init
  const [active, setActive] = React.useState('FREE_SIZE');
  const disabledSize = ['SIZE_6', 'SIZE_8'];
  const color = ['VIOLET', 'BLUE'];
  const [amount, setAmount] = React.useState('1');
  const [amountOld, setAmountOld] = React.useState('1');

  // Handle increase amount
  const handleIncreaseAmount = () => {
    if (Number(amount) > 1) setAmount(`${Number(amount) - 1}`);
  };

  // Handle decrease amount
  const handleDecreaseAmount = () => {
    if (Number(amount) < 99) setAmount(`${Number(amount) + 1}`);
  };

  // Handle change amount
  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    if (
      !isNaN(+e.target.value) &&
      +e.target.value >= 1 &&
      +e.target.value <= 99
    ) {
      setAmountOld(e.target.value);
    }
  };

  return (
    <div>
      <h2 className='text-lg font-semibold mb-2'>BLUE SHIRT SM05822</h2>

      <div className='font-light'>Trademark: IU2000</div>
      <div className='font-light'>Code: 058221212223160466</div>

      <h2 className='text-2xl font-bold my-3'>599.000đ</h2>

      <div className='font-semibold'>Size</div>
      <div className='w-full flex flex-wrap -ml-1 mb-2'>
        {SIZE.map((item) => (
          <button
            key={item.key}
            className={`m-1 px-3 py-1 text-sm sm:text-base ${
              active === item.key
                ? 'bg-black text-white border-black'
                : 'bg-gray-100 border-gray-400'
            } border-2 rounded-md flex items-center ${
              disabledSize.includes(item.key)
                ? 'disabled:cursor-default disabled:opacity-40'
                : ''
            }`}
            disabled={disabledSize.includes(item.key)}
            onClick={() => setActive(item.key)}
          >
            {item.value}
          </button>
        ))}
      </div>

      <div className='font-semibold'>Color</div>
      <div className='w-full flex flex-wrap -ml-1 mb-2'>
        {color.map((item) => {
          const co = COLOR.find((i) => i.key === item);
          if (co) {
            return (
              <div
                key={co.key}
                className={`h-6 w-6 m-1 bg-${co.value} border-2 rounded-xl`}
              ></div>
            );
          }
        })}
      </div>

      <div className='mb-6'>
        <a href='#' className='underline'>
          SIZE SELECTION GUIDE
        </a>
      </div>

      <div className='flex items-center mb-6'>
        <span className='mr-4'>Amount</span>
        <span className='flex'>
          <div className='mr-1 flex items-center justify-center p-0 text-center border hover:outline-none hover:no-underline focus:outline-none focus:no-underline text-white bg-none opacity-50 transition-opacity hover:opacity-90 focus:opacity-90 rounded-[7px]'>
            <button
              className='p-2 bg-black rounded-[7px]'
              type='button'
              onClick={() => handleIncreaseAmount()}
            >
              <span className='visually-hidden'>
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
                    d='M15.75 19.5L8.25 12l7.5-7.5'
                  />
                </svg>
              </span>
            </button>
          </div>
          <input
            className={`w-20 mr-1 text-center bg-transparent text-gray-700 font-normal outline outline-0 focus:outline-0 transition-all border text-sm px-3 py-2.5 rounded-[7px] border-gray-400`}
            value={amount}
            onChange={(e) => handleChangeAmount(e)}
            onBlur={() => setAmount(amountOld)}
          />
          <div className='flex items-center justify-center p-0 text-center border hover:outline-none hover:no-underline focus:outline-none focus:no-underline text-white bg-none opacity-50 transition-opacity hover:opacity-90 focus:opacity-90 rounded-[7px]'>
            <button
              className='p-2 bg-black rounded-[7px]'
              type='button'
              onClick={() => handleDecreaseAmount()}
            >
              <span className='visually-hidden'>
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
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </span>
            </button>
          </div>
        </span>
      </div>

      <div>
        <button
          className={`w-full mb-2 px-3 py-1 bg-gray-100 border-gray-400 border-2 rounded-md text-center`}
          // onClick={() => setActive(item.key)}
        >
          ADD TO CART
        </button>
        <button
          className={`w-full mb-6 px-3 py-1 bg-black text-white border-black border-2 rounded-md text-center`}
          // onClick={() => setActive(item.key)}
        >
          BUY NOW
        </button>
      </div>

      <div className='mb-12'>
        <span className='font-bold'>Material:</span>
        high quality synthetic fabric.
        <br />
        <span className='font-bold'>Style:</span> Knee-length flowing dress,
        smooth brick orange tone, stylized ruffled front body.
        <br />
        <span className='font-bold'>Suitable:</span> going to work, events, or
        walking on the street, creating a youthful and feminine look for the
        wearer.
        <br />
        <span className='font-bold'>Products in the product line:</span> NEM NEW
        <br />
        <span className='font-bold'>Model information:</span> wear size 2
      </div>
    </div>
  );
};

export default ProductInformation;
