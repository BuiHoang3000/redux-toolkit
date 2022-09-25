import React from 'react';
//
import carousel1 from '~/assets/images/new_product_carousel_1.webp';
import carousel2 from '~/assets/images/new_product_carousel_2.webp';
import carousel3 from '~/assets/images/new_product_carousel_3.webp';
import carousel4 from '~/assets/images/new_product_carousel_4.webp';
import carousel5 from '~/assets/images/new_product_carousel_5.webp';
import carousel6 from '~/assets/images/new_product_carousel_6.webp';
import { WIDTH_XL } from '~/constants';
import useWindowWide from '~/hooks/useWindowWide';
import {
  CarouselItem,
  CarouselPreAndNextOutSideTemp,
  FULL,
  INIT_DATA,
  LARGE,
  NEXT,
  PREVIOUS,
  RE_SIZE,
  useCarouselDispatch,
  useCarouselState,
} from '~/templates/Carousel';
import { CarouselWrapper } from '~/templates/Carousel';

const listCarousels: CarouselItem[] = [
  {
    id: 1,
    url: carousel1,
    title: 'SLEEVELESS SHIRT SM91372',
    price: '500.000',
  },
  {
    id: 2,
    url: carousel2,
    title: 'RED SILK DRESS D05462',
    price: '1.200.000',
  },
  {
    id: 3,
    url: carousel3,
    title: 'SLEEVELESS SHIRT SM91372',
    price: '500.000',
  },
  {
    id: 4,
    url: carousel4,
    title: 'DESIGN SHIRT SM91352',
    price: '799.000',
  },
  {
    id: 5,
    url: carousel5,
    title: 'ORGANIC DRESS D05752',
    price: '1.399.000',
  },
  {
    id: 6,
    url: carousel6,
    title: 'SHORT Q05532',
    price: '599.000',
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
        <li className='relative min-w-full xl:min-w-[25%]' key={item.id}>
          <img src={item.url} className='w-full' />
          <div className={`text-center bottom-5 py-2 w-full`}>
            <h5 className='text-xs text-gray-500'>{item.title}</h5>
            <p className='text-gray-900 font-semibold'>{item.price}₫</p>
          </div>
        </li>
      ))}
    </>
  );
});
ListImage.displayName = 'ListImage';

const SimilarProduct = () => {
  const carouselState = useCarouselState();
  const carouselDispatch = useCarouselDispatch();
  const width = useWindowWide();

  React.useEffect(() => {
    if (listCarousels && listCarousels.length > 0) {
      carouselDispatch({
        type: INIT_DATA,
        initData: listCarousels,
        auto: false,
        size: 0,
      });
    }
  }, [listCarousels, carouselDispatch]);

  React.useEffect(() => {
    if (width > WIDTH_XL && carouselState.size !== LARGE) {
      carouselDispatch({ type: RE_SIZE, size: LARGE });
    }
    if (width < WIDTH_XL && carouselState.size !== FULL) {
      carouselDispatch({ type: RE_SIZE, size: FULL });
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
          className='flex relative w-full'
          style={{
            transform: `translate3d(-${
              carouselState.current *
              (100 / (width > WIDTH_XL ? (carouselState.size || 0) + 1 : 1))
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

export default SimilarProduct;
