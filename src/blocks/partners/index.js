import styles from './partners.module.css';
import Image from 'next/image';

const logos = [
  '/avgust.svg',
  '/gift-company.svg',
  '/hilon.png',
  '/profdst.svg',
  '/remdiesel.png',
  '/reschke.svg',
  '/tmmash.svg',
];

export default function Partners() {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <div className={styles.partnersContainer}>
          {logos.map(url => (
            <Image
              width={288}
              height={158}
              key={url}
              alt={url}
              src={url}
              className={styles.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
