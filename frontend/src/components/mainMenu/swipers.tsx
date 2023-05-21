import React, { useRef, useEffect } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

interface SwiperCarouselProps {
  images: string[];
}

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({ images }) => {
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    } else {
      swiperRef.current = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  }, [images]);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {images.map((imageUrl, index) => (
          <div className="swiper-slide" key={index}>
            <img className="swiper-image" src={imageUrl} alt={`carousel-image-${index}`} />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default SwiperCarousel;
