import React from 'react';
//
import { useCarouselState } from '~/templates/Carousel';

const MainImage = () => {
  // Init
  const carouselState = useCarouselState();
  const [image, setImage] = React.useState('');

  // Set main image show
  React.useEffect(() => {
    setImage(
      carouselState.data[carouselState.current]
        ? (carouselState.data[carouselState.selectedImage || 0].url as string)
        : '',
    );
  }, [carouselState.data, carouselState.selectedImage]);

  return <img src={image} />;
};

export default MainImage;
