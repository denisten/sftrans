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
        <span>Полный цикл логистики из Китая в Россию под ключ</span>
        <span>Собственный автопарк. ChinaPay. Параллельный импорт.</span>
      </div>
    </div>
  );
}
