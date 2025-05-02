'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

const autoplaySettings = {
  delay: 3000,
  disableOnInteraction: false,
};

export default function Slider({
  data,
  Content,
  activeIndex,
  autoplay = false,
  isFullHeight = true,
}) {
  const swiperRef = useRef(null);

  // Когда изменится activeIndex, перепрыгиваем на нужный слайд
  useEffect(() => {
    if (swiperRef.current && activeIndex !== undefined) {
      swiperRef.current.slideToLoop(activeIndex);
    }
  }, [activeIndex]);

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={autoplay ? autoplaySettings : undefined}
      onSwiper={swiper => (swiperRef.current = swiper)}
      style={{
        width: '100%',
        height: isFullHeight ? '100vh' : 'auto',
      }}
    >
      {data.map((item, idx) => (
        <SwiperSlide key={idx}>
          <Content item={item} isActive={idx === activeIndex} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
