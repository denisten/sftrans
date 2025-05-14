import styles from './service-card.module.css';
import Image from 'next/image';

export default function ServiceCardMobile({ svc, isLeft }) {
  return (
    <div
      className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}
    >
      <div
        style={{ background: svc.bg }}
        className={`${styles.contentBox} ${isLeft ? styles.leftBox : styles.rightBox}`}
      >
        {isLeft ? (
          <>
            <div className={styles.text}>
              <h3 className={styles.title}>{svc.title}</h3>
              <p className={styles.desc}>{svc.description}</p>
            </div>
            <div className={styles.iconBox}>
              <Image src={svc.icon} alt={svc.title} width={48} height={48} />
            </div>
          </>
        ) : (
          <>
            <div className={styles.iconBox}>
              <Image src={svc.icon} alt={svc.title} width={48} height={48} />
            </div>
            <div className={styles.text}>
              <h3 className={styles.title}>{svc.title}</h3>
              <p className={styles.desc}>{svc.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
