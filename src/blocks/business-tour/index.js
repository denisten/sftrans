'use client';

import styles from './business-tour.module.css';
import { useScrollTo } from '@/hooks/use-scroll-to';

export default function BusinessTourBlock() {
  const scroll = useScrollTo();
  const handleScroll = e => {
    scroll('form');
  };
  return (
    <section className={styles.section} id="business-tours">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Организация бизнес туров в <span className={styles.blue}>КНР</span>
        </h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/icons/shield-check.svg" className={styles.icon} />
            <div className={styles.content}>
              <p className={styles.text}>
                По вашему запросу будут найдены производители и отобраны по
                принципу высокого рейтинга финансовой и юридической
                благонадежности.
              </p>
              <button className={styles.button} onClick={handleScroll}>
                Оставить заявку
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/icons/compass.svg" className={styles.icon} />
            <div className={styles.content}>
              <p className={styles.text}>
                Наша компания предоставляет полный спектр услуг по организации и
                сопровождению клиента в Китае для наилучшего выбора качества
                товара и его поставки в РФ.
              </p>
              <button className={styles.button} onClick={handleScroll}>
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
