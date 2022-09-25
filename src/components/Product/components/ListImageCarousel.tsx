import React from 'react';
//
import carousel1 from '~/assets/images/new_product_carousel_1.webp';
import carousel2 from '~/assets/images/new_product_carousel_2.webp';
import carousel3 from '~/assets/images/new_product_carousel_3.webp';
import carousel4 from '~/assets/images/new_product_carousel_4.webp';
import carousel5 from '~/assets/images/new_product_carousel_5.webp';
import carousel6 from '~/assets/images/new_product_carousel_6.webp';
import useWindowWide from '~/hooks/useWindowWide';
import {
  CarouselItem,
  CarouselWrapper,
  INIT_DATA,
  MEDIUM,
  NEXT,
  NEXT_NORMAL,
  PREVIOUS,
  PREVIOUS_NORMAL,
  SELECTED_IMAGE,
  useCarouselDispatch,
  useCarouselState,
} from '~/templates/Carousel';

const listCarousels: CarouselItem[] = [
  {
    id: 1,
    url: carousel1,
  },
  {
    id: 2,
    url: carousel2,
  },
  {
    id: 3,
    url: carousel3,
  },
  {
    id: 4,
    url: carousel4,
  },
  {
    id: 5,
    url: carousel5,
  },
  {
    id: 6,
    url: carousel6,
  },
];

type ListImageProps = {
  data: CarouselItem[];
  selectedImage: number;
  onClick: (id: number) => void;
};

const ListImage = React.memo((props: ListImageProps) => {
  const { data, selectedImage, onClick } = props;

  return (
    <>
      {data.map((item: CarouselItem, index: number) => (
        <li className='min-w-[33.33%] p-1' key={item.id}>
          <img
            src={item.url}
            onClick={() => {
              if (index !== selectedImage) {
                onClick(index);
              }
            }}
          />
        </li>
      ))}
    </>
  );
});
ListImage.displayName = 'ListImage';

const ListImageCarousel = () => {
  const carouselState = useCarouselState();
  const carouselDispatch = useCarouselDispatch();
  const width = useWindowWide();

  React.useEffect(() => {
    if (listCarousels && listCarousels.length > 0) {
      carouselDispatch({
        type: INIT_DATA,
        initData: listCarousels,
        auto: false,
        size: MEDIUM,
      });
    }
  }, [listCarousels]);

  const handleImageClick = React.useCallback((id: number) => {
    carouselDispatch({
      type: SELECTED_IMAGE,
      selectedImage: id,
    });
  }, []);

  const handlePrevious = React.useCallback(() => {
    carouselDispatch({ type: width < 768 ? PREVIOUS : PREVIOUS_NORMAL });
  }, [width]);

  const handleNext = React.useCallback(() => {
    carouselDispatch({ type: width < 768 ? NEXT : NEXT_NORMAL });
  }, [width]);

  const preAndNext = () => (
    <>
      <div className='absolute top-0 bottom-0 -left-6 md:-top-4 md:left-0 md:right-0 md:bottom-auto flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline text-white bg-none opacity-50 transition-opacity hover:opacity-90 focus:opacity-90'>
        <button
          className='p-2 bg-black'
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
              className='w-3 h-3 md:w-6 md:h-6 md:rotate-90'
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
      <div className='absolute top-0 bottom-0 -right-6 md:top-auto md:-bottom-5 md:left-0 md:right-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline text-white bg-none opacity-50 transition-opacity hover:opacity-90 focus:opacity-90'>
        <button
          className='p-2 bg-black'
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
              className='w-3 h-3 md:w-6 md:h-6 md:rotate-90'
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

  return (
    <CarouselWrapper previousAndNext={preAndNext}>
      <div className='hidden md:block max-h-[60vh] overflow-y-hidden'>
        <ul
          className='flex flex-col relative'
          style={{
            transform: `translate3d(0px, -${
              carouselState.current *
              (100 /
                ((carouselState.size || carouselState.data.length / 3) * 3))
            }%, 0px)`,
            transitionDuration: '350ms',
          }}
        >
          <ListImage
            data={[...carouselState.data] as CarouselItem[]}
            selectedImage={carouselState.selectedImage || 0}
            onClick={handleImageClick}
          />
        </ul>
      </div>
      <div className='w-full overflow-x-hidden md:hidden'>
        <ul
          className='flex relative'
          style={{
            transform: `translate3d(-${
              carouselState.current * (100 / ((carouselState.size || 0) + 1))
            }%, 0px, 0px)`,
            transitionDuration: '350ms',
          }}
        >
          <ListImage
            data={[...carouselState.data] as CarouselItem[]}
            selectedImage={carouselState.selectedImage || 0}
            onClick={handleImageClick}
          />
        </ul>
      </div>
    </CarouselWrapper>
  );
};

export default ListImageCarousel;
