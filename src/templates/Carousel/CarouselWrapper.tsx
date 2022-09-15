import { ReactNode, useEffect } from 'react';
import {
  GO_TO_PAGE,
  useCarouselDispatch,
  useCarouselState,
} from './CarouselProvider';

type CarouselWrapperProps = {
  children: ReactNode;
  gotoPage: () => JSX.Element;
  previousAndNext: () => JSX.Element;
};

const CarouselWrapper = (props: CarouselWrapperProps) => {
  const { children, gotoPage, previousAndNext } = props;
  const carouselState = useCarouselState();
  const carouselDispatch = useCarouselDispatch();

  useEffect(() => {
    if (carouselState.auto) {
      const timer = setInterval(() => {
        carouselDispatch({
          type: GO_TO_PAGE,
          goToPage: (carouselState.current + 1) % carouselState.data.length,
        });
      }, carouselState.timePlay);

      return () => clearInterval(timer);
    }
  }, [
    carouselDispatch,
    carouselState.current,
    carouselState.auto,
    carouselState.timePlay,
  ]);

  return (
    <div>
      <div className='relative'>
        {children}

        <>
          {gotoPage()}
          {previousAndNext()}
        </>
      </div>
    </div>
  );
};

export default CarouselWrapper;
