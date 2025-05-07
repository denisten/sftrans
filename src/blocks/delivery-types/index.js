'use client';

import styles from './delivery-types.module.css';
import { useScrollTo } from '@/hooks/use-scroll-to';

const deliveries = [
  { id: 1, title: 'Авиа', days: 'от 1 до 3 дней' },
  { id: 2, title: 'Авто', days: 'от 14 до 21 дня' },
  { id: 3, title: 'ЖД', days: 'от 21 до 28 дней' },
  { id: 4, title: 'Море', days: 'от 30 до 45 дней' },
];

export default function DeliveryTypes() {
  // разбиваем на два ряда
  const firstRow = deliveries.slice(0, 2);
  const secondRow = deliveries.slice(2, 4);
  const scrollTo = useScrollTo();
  const handleScroll = e => {
    scrollTo('form');
  };
  return (
    <section className={styles.wrapper} id="delivery">
      <h2 className={styles.title}>Виды доставки</h2>

      <div className={styles.row}>
        {firstRow.map(item => {
          const isLarge = item.id === 1; // первая карточка крупная
          return (
            <div
              key={item.id}
              className={`${styles.card} ${isLarge ? styles.large : ''}`}
            >
              <span className={styles.label}>{item.days}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <button className={styles.button} onClick={handleScroll}>
                Узнать
              </button>
            </div>
          );
        })}
      </div>

      <div className={styles.row}>
        {secondRow.map(item => {
          const isLarge = item.id === 4; // четвёртая карточка крупная
          return (
            <div
              key={item.id}
              className={`${styles.card} ${isLarge ? styles.large : ''}`}
            >
              <span className={styles.label}>{item.days}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <button className={styles.button} onClick={handleScroll}>
                Узнать
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
