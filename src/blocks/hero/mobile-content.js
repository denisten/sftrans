import style from './hero.module.css';
import Image from 'next/image';
import Button from '@/components/button';

export default function MobileContent({ item }) {
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

      <div className={style.mobileContainer}>
        <p className={style.mobileTitle}>Полный цикл логистики</p>
        <p className={style.mobileTitle}>под ключ</p>
        <p className={style.mobileSubtitle}>
          с <span className={style.year}>1997</span> года
        </p>
      </div>
    </div>
  );
}
