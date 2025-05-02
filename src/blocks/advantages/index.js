'use client';

import Image from 'next/image';
import styles from './advantages.module.css';
import { useScrollTranslate } from '@/hooks/use-scroll-translate';
import { createRef, useRef } from 'react';

const SLIDES = [
  {
    key: 1,
    title: 'Большой опыт с 1997 года',
    description:
      'Профессиональный подход и глубокое понимание логистики между Азией и Россией.',
    imageSrc: '',
  },
  {
    key: 2,
    title: 'Собственный склад в Москве',
    description:
      'Склад оснащён платформой для всех видов грузового автотранспорта, которая облегчает погрузку и разгрузку контейнеров. “B”-класс.',
    extra: '“В” - класс',
    imageSrc: '/icons/warehouse.svg',
  },
  {
    key: 3,
    title: 'Декларируем самостоятельно',
    description:
      'Проверим документы, предупредим о рисках, проведём таможенную очистку товара, доставим груз и поможем завершить цикл внешнеторговой сделки.',
    extra: '1000+ готовых сертификатов оформлено',
    imageSrc: '/icons/declaration.svg',
  },
  {
    key: 4,
    title: 'Гарантируем юридическую безопасность',
    description:
      'Заключаем договоры по нормам местного и международного права, а также страхуем 100% перевозимых грузов.',
    extra: '100% гарантия сохранности груза',
    imageSrc: '/icons/legal.svg',
  },
  {
    key: 5,
    title: 'Современные технологии',
    description: 'Онлайн-отслеживание груза и индивидуальные IT-решения.',
    imageSrc: '/icons/tech.svg',
  },
];

export default function Advantages() {
  // 1) ref на wrapper’е цифр
  const wrapperRef = useRef(null);

  // 2) создаём массив ref’ов ОДИН раз
  const plateRefs = useRef(SLIDES.map(() => createRef()));

  // 3) получаем translateY из хука, передавая ему эти refs
  const translate = useScrollTranslate(wrapperRef, plateRefs.current);

  return (
    <section className={styles.section} id="advantages">
      <div className={styles.left}>
        <div className={styles.textContainer}>
          <p className={styles.count}>5 ПРИЧИН</p>
          <h2 className={styles.heading}>
            Доверить свой груз <br />
            SAFETRANS INTERNATIONAL
          </h2>
        </div>
        <div className={styles.wrapperNumbers} ref={wrapperRef}>
          <div
            className={styles.scroll}
            style={{ transform: `translateY(${translate}px)` }}
          >
            <div className={styles.numbers}>
              <span>01</span>
              <span>02</span>
              <span>03</span>
              <span>04</span>
              <span>05</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        {SLIDES.map(({ description, title, imageSrc, key, extra }, i) => (
          <div key={key} ref={plateRefs.current[i]}>
            <Plate
              description={description}
              title={title}
              imageSrc={imageSrc}
              extra={extra}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

const Plate = ({ title, description, imageSrc, extra }) => {
  const isImg = imageSrc.startsWith('/');
  return (
    <div className={styles.plate}>
      <h2 className={styles.plateTitle}>{title}</h2>
      <div className={styles.separator} />
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{description}</p>
        {extra && <span className={styles.extra}>{extra}</span>}
        {isImg ? (
          <Image
            width={100}
            height={100}
            alt="description img"
            className={styles.image}
            src={imageSrc}
          />
        ) : (
          <span className={styles.year}>1997</span>
        )}
      </div>
    </div>
  );
};
