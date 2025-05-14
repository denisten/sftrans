import { motion } from 'framer-motion';
import styles from './service-card.module.css';
import Image from 'next/image';

export default function ServiceCard({
  svc,
  isLeft,
  isActive,
  isBefore,
  isAfter,
}) {
  // const marginTop = isAfter ? 40 : '-2rem';
  // const marginBottom = isBefore ? 40 : '-2rem';

  return (
    <motion.div
      data-timeline-id={svc.id}
      // style={{ marginTop, marginBottom }}
      animate={{
        scale: isActive ? 1.05 : 0.96,
        y: isActive ? -20 : 0,
        opacity: isActive ? 1 : 0.4,
        filter: isActive ? 'blur(0px)' : 'blur(1.5px)',
        zIndex: isActive ? 2 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
    </motion.div>
  );
}
