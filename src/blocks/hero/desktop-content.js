'use client';

import Image from 'next/image';
import style from './hero.module.css';
import Button from '@/components/button';

export const DesktopContent = ({ item }) => {
  const { src, text } = item;

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
