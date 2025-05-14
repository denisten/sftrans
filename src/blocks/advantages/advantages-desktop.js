import { createRef, useRef } from 'react';
import { SLIDES } from './constants';
import { useScrollTranslate } from '@/hooks/use-scroll-translate';
import styles from './advantages.module.css';
import Image from 'next/image';

export default function AdvantagesDesktop() {
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
          <p className={styles.count}>6 ПРИЧИН</p>
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
              <span>06</span>
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
