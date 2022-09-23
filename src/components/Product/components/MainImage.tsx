import React from 'react';
//
import { useCarouselState } from '~/templates/Carousel';

const MainImage = () => {
  const carouselState = useCarouselState();
  const [image, setImage] = React.useState('');

  React.useEffect(() => {
    setImage(
      carouselState.data[carouselState.current]
        ? carouselState.data[carouselState.selectedImage || 0].url
        : '',
    );
  }, [carouselState.data, carouselState.selectedImage]);

  return <img src={image} />;
};

export default MainImage;
