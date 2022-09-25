import { CarouselContextProvider } from '~/templates/Carousel';
import FeaturedInBlog from './components/FeaturedInBlog';
import MainProductCarousel from './components/MainProductCarousel';
import NewProductCarousel from './components/NewProductCarousel';
import Outstanding from './components/Outstanding';

const HomePage = () => {
  return (
    <div>
      <div className='mb-1'>
        <CarouselContextProvider>
          <MainProductCarousel />
        </CarouselContextProvider>
      </div>
      <div className='mb-7'>
        <Outstanding />
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
      <div className='w-5/6 mx-auto mb-7'>
        <h2 className='text-center font-extrabold text-2xl'>{`IU2000'S BLOG`}</h2>
        <h2 className='mb-7 text-center font-extrabold text-sm'>
          CATCHING UP ON TRENDS, SHAPING THEIR STYLE
        </h2>
        <CarouselContextProvider>
          <FeaturedInBlog />
        </CarouselContextProvider>
      </div>
    </div>
  );
};

export default HomePage;
