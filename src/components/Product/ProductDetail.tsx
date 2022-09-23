import { CarouselContextProvider } from '~/templates/Carousel';
//
import ListImageCarousel from './components/ListImageCarousel';
import MainImage from './components/MainImage';
import ProductInformation from './components/ProductInformation';
import SimilarProduct from './components/SimilarProduct';

const ProductDetail = () => {
  return (
    <div className='flex flex-col mb-4 md:flex-row mx-auto xl:w-[1300px]'>
      <CarouselContextProvider>
        <div className='w-full md:w-2/3 flex flex-col-reverse md:flex-row'>
          <div className='w-full md:w-1/3 my-5 px-4'>
            <ListImageCarousel />
          </div>
          <div className='w-full md:w-2/3'>
            <MainImage />
          </div>
        </div>
      </CarouselContextProvider>
      <div className='w-full md:w-1/3 px-4'>
        <ProductInformation />
      </div>
      <div className='border-t-2 pt-5'>
        <h2 className=' text-center font-semibold text-3xl'>SIMILAR PRODUCT</h2>
        <div className='mt-5'>
          <CarouselContextProvider>
            <SimilarProduct />
          </CarouselContextProvider>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
