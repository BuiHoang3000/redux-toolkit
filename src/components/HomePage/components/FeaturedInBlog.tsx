import React from 'react';
//
import carousel1 from '~/assets/images/blog_carousel_1.webp';
import carousel2 from '~/assets/images/blog_carousel_2.webp';
import carousel3 from '~/assets/images/blog_carousel_3.webp';
import carousel4 from '~/assets/images/blog_carousel_4.webp';
import carousel5 from '~/assets/images/blog_carousel_5.webp';
import { WIDTH_MD } from '~/constants';
import useWindowWide from '~/hooks/useWindowWide';
import {
  CarouselItem,
  CarouselPreAndNextOutSideTemp,
  CarouselWrapper,
  INIT_DATA,
  MEDIUM,
  NEXT,
  PREVIOUS,
  RE_SIZE,
  SMALL,
  useCarouselDispatch,
  useCarouselState,
} from '~/templates/Carousel';

const listCarousels: CarouselItem[] = [
  {
    id: 1,
    url: carousel1,
    title: 'DISCOVER 4 SPECIAL DISCOVERING SUMMER 2022',
  },
  {
    id: 2,
    url: carousel2,
    title: 'BRIGHT WELCOME SUMMER WITH FLOWER DRESS',
  },
  {
    id: 3,
    url: carousel3,
    title: '3 ELEGANT AND LUXURY VEST CLASSES FOR OFFICE GIRL',
  },
  {
    id: 4,
    url: carousel4,
    title: 'SUMMER FESTIVAL - T-SHIRTS FROM 299K',
  },
  {
    id: 5,
    url: carousel5,
    title: 'MAKING IMPACT WITH BRIDGE DRESS',
  },
];

type ListImageProps = {
  data: CarouselItem[];
};

const ListImage = React.memo((props: ListImageProps) => {
  const { data } = props;

  return (
    <>
      {data.map((item: CarouselItem) => (
        <li className='min-w-[50%] md:min-w-[33.33%] px-1' key={item.id}>
          <div className='h-4/5'>
            <img src={item.url} className='w-full h-full object-cover' />
          </div>
          <div className={`text-center bottom-5 py-2 w-full`}>
            <h5 className='text-xs text-gray-500'>{item.title}</h5>
          </div>
        </li>
      ))}
    </>
  );
});
ListImage.displayName = 'ListImage';

const FeaturedInBlog = () => {
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
  }, [listCarousels, carouselDispatch]);

  React.useEffect(() => {
    if (width > WIDTH_MD && carouselState.size !== MEDIUM) {
      carouselDispatch({ type: RE_SIZE, size: MEDIUM });
    }
    if (width < WIDTH_MD && carouselState.size !== SMALL) {
      carouselDispatch({ type: RE_SIZE, size: SMALL });
    }
  }, [width, carouselState.size]);

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
          className='flex relative'
          style={{
            transform: `translate3d(-${
              carouselState.current * (100 / ((carouselState.size || 0) + 1))
            }%, 0px, 0px)`,
            transitionDuration: '350ms',
          }}
        >
          <ListImage data={[...carouselState.data] as CarouselItem[]} />
        </ul>
      </div>
    </CarouselWrapper>
  );
};

export default FeaturedInBlog;
