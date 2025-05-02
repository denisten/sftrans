'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import style from './slider.module.css';
import Button from '@/components/button';

export const Content = ({ item }) => {
  const { src, text } = item;
  const isMobile = false;
  // const isMobile = window.innerWidth < 600;

  useEffect(() => {
    if (!isMobile) {
      setTimeout(() => {
        const video = document.getElementById('hero-video');
        video?.load();
      }, 3000);
    }
  }, [isMobile]);
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
      className={style.slideContainer}
    >
      <Image
        className={style.image}
        src={src}
        alt="hero"
        priority
        fill
        quality={90}
      />

      <div className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.logoBlock}>
            <div className={style.textBlock}>
              <h1 className={style.title}>
                Полный цикл логистики из Китая в Россию под ключ
              </h1>
              <h2 className={style.description}>
                Собственный автопарк. ChinaPay. Параллельный импорт.
              </h2>
              <Button text="Подробнее" width="178px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
