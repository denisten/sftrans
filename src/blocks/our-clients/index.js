import styles from './our-clients.module.css';

export default function OurClients() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Помогаем малому, среднему и крупному бизнесам производить и доставлять
        качественную зарубежную продукцию в Россию
      </h2>
      <div className={styles.amount}>
        <div className={styles.numbersContainer}>
          <span className={styles.number}>1000</span>
          <sup className={styles.plus}>+</sup>
        </div>
        <div className={styles.description}>
          Клиентов воспользовались услугами SAFETRANS INTERNATIONAL с 1997 года
        </div>
      </div>
    </section>
  );
}
