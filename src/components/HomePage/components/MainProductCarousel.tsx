import React from 'react';
//
import carousel1 from '~/assets/images/home_new_carousel_1.png';
import carousel2 from '~/assets/images/home_new_carousel_2.png';
import {
  CarouselItem,
  GO_TO_PAGE,
  INIT_DATA,
  NEXT,
  PREVIOUS,
  useCarouselDispatch,
  useCarouselState,
} from '~/templates/Carousel';
import CarouselGoToPageTemp from '~/templates/Carousel/CarouselGoToPageTemp';
import CarouselPreAndNextTemp from '~/templates/Carousel/CarouselPreAndNextTemp';
import CarouselWrapper from '~/templates/Carousel/CarouselWrapper';

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

const MainProductCarousel = () => {
  const carouselState = useCarouselState();
  const carouselDispatch = useCarouselDispatch();

  React.useEffect(() => {
    if (listCarousels && listCarousels.length > 0) {
      carouselDispatch({
        type: INIT_DATA,
        initData: listCarousels,
        auto: true,
      });
    }
  }, [listCarousels, carouselDispatch]);

  const goToPage = React.useCallback(
    () => (
      <CarouselGoToPageTemp
        data={carouselState.data}
        active={carouselState.current}
        setActive={(index: number) => {
          carouselDispatch({
            type: GO_TO_PAGE,
            goToPage: index,
          });
        }}
      />
    ),
    [carouselState],
  );

  const handlePrevious = React.useCallback(() => {
    carouselDispatch({ type: PREVIOUS });
  }, []);

  const handleNext = React.useCallback(() => {
    carouselDispatch({ type: NEXT });
  }, []);

  const preAndNext = () => (
    <CarouselPreAndNextTemp
      handlePrevious={handlePrevious}
      handleNext={handleNext}
    />
  );

  return (
    <CarouselWrapper gotoPage={goToPage} previousAndNext={preAndNext}>
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

      {carouselState.data.map((item, index: number) => (
        <div
          key={item.id}
          className={`hidden md:${
            index === carouselState.current ? 'block' : 'hidden'
          } absolute text-center right-[15%] left-[15%] bottom-5 py-5 text-white`}
        >
          <h5 className='text-xl'>{item.title}</h5>
          <p>{item.content}</p>
        </div>
      ))}
    </CarouselWrapper>
  );
};

export default MainProductCarousel;
