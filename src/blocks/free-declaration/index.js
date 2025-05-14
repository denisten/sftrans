'use client';

import styles from './free-declaration.module.css';
import { useScrollTo } from '@/hooks/use-scroll-to';
import { useIsMobile } from '@/hooks/use-is-mobile';

export default function FreeDeclaration() {
  const scrollTo = useScrollTo();
  const handleScroll = e => {
    scrollTo('form');
  };
  const isMobile = useIsMobile();
  return (
    <section className={styles.container}>
      <div className={styles.section}>
        <div className={styles.free}>
          <p className={styles.text}>
            {isMobile ? (
              'Новым клиентам подача таможенной декларации'
            ) : (
              <>
                Новым клиентам подача
                <br />
                таможенной декларации
              </>
            )}
          </p>
          <span className={styles.title}>Бесплатно</span>
        </div>
      </div>
      <button className={styles.btn} onClick={handleScroll}>
        <span className={styles.btnText}>Оставить заявку</span>
        <div className={styles.circle} />
      </button>
    </section>
  );
}
