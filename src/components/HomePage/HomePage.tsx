import { CarouselContextProvider } from '~/templates/Carousel';
import MainProductCarousel from './components/MainProductCarousel';
import NewProductCarousel from './components/NewProductCarousel';

const HomePage = () => {
  return (
    <div>
      <CarouselContextProvider>
        <MainProductCarousel />
      </CarouselContextProvider>
      <CarouselContextProvider>
        <NewProductCarousel />
      </CarouselContextProvider>
    </div>
  );
};

export default HomePage;
