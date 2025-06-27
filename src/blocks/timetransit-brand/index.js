'use client';

import styles from './timetransit-brand.module.css';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/use-is-mobile';

export default function TimetransitBrand() {
  const isMobile = useIsMobile();

  return (
    <section className={styles.container} id="timetransit">
      <h1 className={styles.title}>
        Наш новый <span className={styles.brandText}>БРЕНД</span>
      </h1>
      <h2 className={styles.description}>
        Один и тот же уровень сервиса, одна команда — два узнаваемых названия.
        <br />
        Ознакомьтесь с нашим новым сайтом:
      </h2>
      <div className={styles.brandsContainer}>
        <Image
          src="/sftrans-logo.png"
          alt="sflogo"
          priority
          width={isMobile ? 154 : 462}
          height={isMobile ? 39 : 117}
        />
        <Image
          src="/transition.png"
          className={styles.transitionLogo}
          alt="transition"
          priority
          width={isMobile ? 79 : 200}
          height={isMobile ? 79 : 200}
        />
        <Image
          src="/timetransit-logo.png"
          alt="timetransit-logo"
          priority
          width={isMobile ? 80 : 200}
          height={isMobile ? 100 : 252}
        />
      </div>
      <a
        href="https://timetransit.net/"
        target="_blank" /* открывает в новой вкладке */
        rel="noopener noreferrer"
        /* для безопасности и производительности */ type="submit"
        className={styles.submitButton}
      >
        Перейти
      </a>
    </section>
  );
}
