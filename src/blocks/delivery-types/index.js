'use client';

import styles from './delivery-types.module.css';
import { useScrollTo } from '@/hooks/use-scroll-to';

const deliveries = [
  { id: 1, title: 'Авиа', days: 'от 1 до 3 дней', bg: '/sky-background.png' },
  { id: 2, title: 'Авто', days: 'от 14 до 21 дня', bg: '/auto-background.png' },
  { id: 3, title: 'ЖД', days: 'от 21 до 28 дней', bg: '/train-background.png' },
  { id: 4, title: 'Море', days: 'от 30 до 45 дней', bg: '/sea-background.png' },
  {
    id: 5,
    title: 'Мультимодальные',
    days: 'от 30 до 45 дней',
    bg: '/multimodal-background.png',
    isFull: true,
  },
];

export default function DeliveryTypes() {
  // разбиваем на два ряда
  const firstRow = deliveries.slice(0, 2);
  const secondRow = deliveries.slice(2, 4);
  const thirdRow = deliveries.slice(4);
  return (
    <section className={styles.wrapper} id="delivery">
      <h2 className={styles.title}>Виды доставки</h2>

      <div className={styles.row}>
        {firstRow.map(item => {
          return (
            <Plate
              key={item.id}
              bg={item.bg}
              id={item.id}
              days={item.days}
              isLarge={item.id === 1}
              title={item.title}
            />
          );
        })}
      </div>

      <div className={styles.row}>
        {secondRow.map(item => {
          return (
            <Plate
              key={item.id}
              bg={item.bg}
              id={item.id}
              days={item.days}
              isLarge={item.id === 4}
              title={item.title}
            />
          );
        })}
      </div>
      <div className={styles.row}>
        {thirdRow.map(item => {
          return (
            <Plate
              key={item.id}
              bg={item.bg}
              id={item.id}
              days={item.days}
              isLarge={false}
              isFull={item.isFull}
              title={item.title}
            />
          );
        })}
      </div>
    </section>
  );
}

const Plate = ({ id, days, title, isLarge, bg, isFull }) => {
  const scrollTo = useScrollTo();
  const handleScroll = e => {
    scrollTo('form');
  };
  return (
    <div
      key={id}
      className={`${styles.card} ${isLarge ? styles.large : ''} ${
        isFull ? styles.full : ''
      }`}
    >
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />
      <span className={styles.label}>{days}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <button className={styles.button} onClick={handleScroll}>
        Узнать
      </button>
    </div>
  );
};
