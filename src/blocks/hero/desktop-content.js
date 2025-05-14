'use client';

import Image from 'next/image';
import style from './hero.module.css';
import Button from '@/components/button';
import { useScrollTo } from '@/hooks/use-scroll-to';

export const DesktopContent = ({ item }) => {
  const { src, text } = item;
  const scrollTo = useScrollTo();
  const handleScroll = e => {
    scrollTo('form');
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
                Полный цикл логистики
                <br /> из Китая в Россию под ключ
              </h1>
              <span className={style.description}>
                Собственный автопарк
                <br /> ChinaPay <br />
                Параллельный импорт
              </span>
              <Button onClick={handleScroll} text="Подробнее" width="178px" />
            </div>
          </div>
        </div>
        {/*<div className={style.scrollHint}>↓</div>*/}
      </div>
    </div>
  );
};
