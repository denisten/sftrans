'use client';

import Image from 'next/image';
import style from './hero.module.css';
import Button from '@/components/button';
import { useScrollTo } from '@/hooks/use-scroll-to';

export const DesktopContent = ({ item }) => {
  const { src, text } = item;
  const scrollTo = useScrollTo();
  const handleScroll = section => {
    return () => scrollTo(section);
  };
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
                Полный цикл логистики из Китая в Россию под ключ с{' '}
                <span className={style.year}>1997</span> года
              </h1>

              <div className={style.btn} onClick={handleScroll('advantages')}>
                Подробнее
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.bounceBtn} onClick={handleScroll('form')}>
        Подать зявку
      </div>
    </div>
  );
};
