import { memo } from 'react';

type CarouselPreAndNextOutSideTempProps = {
  handlePrevious: () => void;
  handleNext: () => void;
};

const CarouselPreAndNextOutSideTemp = (
  props: CarouselPreAndNextOutSideTempProps,
) => {
  const { handlePrevious, handleNext } = props;

  return (
    <>
      <div className='absolute top-0 bottom-0 -left-28 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline z-[1] text-white bg-none opacity-50 transition-opacity hover:opacity-90 focus:opacity-90'>
        <button
          className='p-8 w-24 h-24 bg-black'
          type='button'
          onClick={() => handlePrevious()}
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
      <div className='absolute top-0 bottom-0 -right-28 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline z-10 text-white bg-none opacity-50 transition-opacity hover:opacity-90 focus:opacity-90'>
        <button
          className='p-8 w-24 h-24 bg-black'
          type='button'
          onClick={() => handleNext()}
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
    </>
  );
};

export default memo(CarouselPreAndNextOutSideTemp);
