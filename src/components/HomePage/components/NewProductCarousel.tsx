import React from 'react';
//
import carousel1 from '~/assets/images/home_new_carousel_1.png';
import carousel2 from '~/assets/images/home_new_carousel_2.png';
import {
  CarouselItem,
  CarouselPreAndNextOutSideTemp,
  INIT_DATA,
  NEXT,
  PREVIOUS,
  useCarouselDispatch,
  useCarouselState,
} from '~/templates/Carousel';
import { CarouselWrapper } from '~/templates/Carousel';

const listCarousels: CarouselItem[] = [
  {
    id: 1,
    url: carousel1,
    title: 'First slide label',
    content: 'Some representative placeholder content for the first slide.',
  },
  {
    id: 2,
    url: carousel2,
    title: 'Second slide label',
    content: 'Some representative placeholder content for the second slide.',
  },
];

const NewProductCarousel = () => {
  const carouselState = useCarouselState();
  const carouselDispatch = useCarouselDispatch();

  React.useEffect(() => {
    if (listCarousels && listCarousels.length > 0) {
      carouselDispatch({
        type: INIT_DATA,
        initData: listCarousels,
        auto: false,
      });
    }
  }, [listCarousels, carouselDispatch]);

  const handlePrevious = React.useCallback(() => {
    carouselDispatch({ type: PREVIOUS });
  }, []);

  const handleNext = React.useCallback(() => {
    carouselDispatch({ type: NEXT });
  }, []);

  const preAndNext = () => (
    <CarouselPreAndNextOutSideTemp
      handlePrevious={handlePrevious}
      handleNext={handleNext}
    />
  );

  return (
    <CarouselWrapper previousAndNext={preAndNext}>
      <div className='w-full overflow-x-hidden'>
        <ul
          className='flex relative w-full'
          style={{
            transform: `translate3d(-${
              carouselState.current * 100
            }%, 0px, 0px)`,
            transitionDuration: '350ms',
          }}
        >
          {carouselState.data.map((item: any) => (
            <li className='relative min-w-full' key={item.id}>
              <img src={item.url} className='w-full' />
            </li>
          ))}
        </ul>
      </div>
    </CarouselWrapper>
  );
};

export default NewProductCarousel;
