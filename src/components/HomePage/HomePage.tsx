import { CarouselContextProvider } from '~/templates/Carousel';
import MainProductCarousel from './components/MainProductCarousel';
import NewProductCarousel from './components/NewProductCarousel';

const HomePage = () => {
  return (
    <div>
      <CarouselContextProvider>
        <MainProductCarousel />
      </CarouselContextProvider>
      <div className='w-5/6 mx-auto'>
        <CarouselContextProvider>
          <NewProductCarousel />
        </CarouselContextProvider>
      </div>
    </div>
  );
};

export default HomePage;
