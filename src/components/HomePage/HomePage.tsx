import { CarouselContextProvider } from '~/templates/Carousel';
import MainProductCarousel from './components/MainProductCarousel';
import NewProductCarousel from './components/NewProductCarousel';

const HomePage = () => {
  return (
    <div>
      <div className='mb-7'>
        <CarouselContextProvider>
          <MainProductCarousel />
        </CarouselContextProvider>
      </div>
      <div className='w-5/6 mx-auto mb-7'>
        <h2 className='mb-7 text-center font-extrabold text-2xl'>
          NEW PRODUCT
        </h2>
        <CarouselContextProvider>
          <NewProductCarousel />
        </CarouselContextProvider>
      </div>
      <div className='w-5/6 mx-auto mb-7'>
        <h2 className='mb-7 text-center font-extrabold text-2xl'>
          BEST SELLER
        </h2>
        <CarouselContextProvider>
          <NewProductCarousel />
        </CarouselContextProvider>
      </div>
    </div>
  );
};

export default HomePage;
