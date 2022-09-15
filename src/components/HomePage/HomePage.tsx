import { CarouselContextProvider } from '~/templates/Carousel';
import Carousel from './components/Carousel';

const HomePage = () => {
  return (
    <div>
      <CarouselContextProvider>
        <Carousel />
      </CarouselContextProvider>
      Home Page
    </div>
  );
};

export default HomePage;
