// components/Footer/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Левая колонка */}
        <div className={styles.left}>
          <Image
            src="/logo.png"
            alt="SafeTrans International"
            width={180}
            height={60}
          />
          <address className={styles.address}>
            г. Москва, ул. Ленинский пр-т, д. 113/1, оф. E310
            <br />
            (10:00 – 19:00)
          </address>
        </div>

        {/* Навигация */}
        <div className={styles.nav}>
          <ul className={styles.navColumn}>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/about">О компании</Link>
            </li>
          </ul>
          <ul className={styles.navColumn}>
            <li>
              <Link href="/pricing">Стоимость</Link>
            </li>
            <li>
              <Link href="/delivery-types">Виды доставки</Link>
            </li>
          </ul>
        </div>

        {/* Контакты */}
        <div className={styles.right}>
          <button className={styles.cta}>Узнать цену</button>
          <div className={styles.emails}>
            <Link href="mailto:m.st@sftrans.com">m.st@sftrans.com</Link>
            <Link href="mailto:info.st@sftrans.ru">info.st@sftrans.ru</Link>
          </div>
          <a href="tel:+74959692990" className={styles.phone}>
            +7 495 969 29 90
          </a>
        </div>
      </div>

      <div className={styles.copy}>
        Московское представительство «Сейфтранс Интернэшнл Компани Лимитед» ©
        2022 г.
      </div>
    </footer>
  );
}
