import styles from './advantages.module.css';
import Image from 'next/image';
import { SLIDES } from './constants';

export default function AdvantagesMobile() {
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
      </div>

      <div className={styles.right}>
        {SLIDES.map(({ description, title, imageSrc, key, extra }, i) => (
          <div key={key}>
            <MobilePlate
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

const MobilePlate = ({ title, description, imageSrc, extra }) => {
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
            width={80}
            height={80}
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
