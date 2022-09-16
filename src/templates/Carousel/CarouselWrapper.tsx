import { ReactNode, useEffect } from 'react';
import {
  FULL,
  GO_TO_PAGE,
  useCarouselDispatch,
  useCarouselState,
} from './CarouselProvider';

type CarouselWrapperProps = {
  children: ReactNode;
  gotoPage?: () => JSX.Element;
  previousAndNext?: () => JSX.Element;
};

export const CarouselWrapper = (props: CarouselWrapperProps) => {
  const { children, gotoPage, previousAndNext } = props;
  const carouselState = useCarouselState();
  const carouselDispatch = useCarouselDispatch();

  useEffect(() => {
    if (carouselState.auto) {
      const timer = setInterval(() => {
        carouselDispatch({
          type: GO_TO_PAGE,
          goToPage:
            (carouselState.current + 1) %
            (carouselState.data.length - (carouselState.size || FULL)),
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
          {gotoPage && gotoPage()}
          {previousAndNext && previousAndNext()}
        </>
      </div>
    </div>
  );
};
