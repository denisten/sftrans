'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import { useHideOnScroll } from '@/hooks/use-hide-on-scroll';
import { useScrollTo } from '@/hooks/use-scroll-to';

export default function Header() {
  const visible = useHideOnScroll();
  const scrollTo = useScrollTo();

  const handleScroll = id => {
    return () => scrollTo(id);
  };
  return (
    <header
      className={styles.header}
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease',
      }}
    >
      <div className={styles.container}>
        <button onClick={handleScroll('hero')}>
          <Image
            src="/logo.png"
            className={styles.logo}
            alt="logo"
            priority
            width={180}
            height={80}
          />
        </button>
        <nav className={styles.nav}>
          <button onClick={handleScroll('hero')}>Главная</button>
          <button onClick={handleScroll('form')}>Заявка</button>
          <button onClick={handleScroll('timetransit')}>timetransit</button>
          <button onClick={handleScroll('services')}>Услуги</button>
          <button onClick={handleScroll('delivery')}>Виды доставки</button>
          <button onClick={handleScroll('advantages')}>Преимущества</button>
          <button onClick={handleScroll('contacts')}>Контакты</button>
        </nav>
      </div>
    </header>
  );
}
