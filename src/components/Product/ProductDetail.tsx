import { CarouselContextProvider } from '~/templates/Carousel';
//
import ListImageCarousel from './components/ListImageCarousel';
import MainImage from './components/MainImage';
import ProductInformation from './components/ProductInformation';
import SimilarProduct from './components/SimilarProduct';

const ProductDetail = () => {
  return (
    <>
      <div className='flex flex-col pb-10 mb-10 md:flex-row mx-auto xl:w-[1300px] border-b-2 '>
        <div className='w-full md:w-2/3 flex flex-col-reverse md:flex-row'>
          <CarouselContextProvider>
            <div className='md:w-1/3 m-5 md:my-5 md:mx-auto px-4'>
              <ListImageCarousel />
            </div>
            <div className='w-full md:w-2/3'>
              <MainImage />
            </div>
          </CarouselContextProvider>
        </div>
        <div className='w-full md:w-1/3 px-4'>
          <ProductInformation />
        </div>
      </div>

      <div className='pb-10 mx-auto xl:w-[1300px]'>
        <h2 className='mb-5 text-center font-semibold text-3xl'>
          SIMILAR PRODUCT
        </h2>
        <div className='mx-10 xl:mx-auto'>
          <CarouselContextProvider>
            <SimilarProduct />
          </CarouselContextProvider>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
