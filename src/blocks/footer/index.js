'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './footer.module.css';
import { useScrollTo } from '@/hooks/use-scroll-to';
import { useIsMobile } from '@/hooks/use-is-mobile';

export default function Footer() {
  const scrollTo = useScrollTo();
  const isMobile = useIsMobile();
  const [showAllContacts, setShowAllContacts] = useState(false);

  const handleScroll = id => {
    return () => scrollTo(id);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Левая колонка */}
        <div className={styles.left}>
          <Image
            src="/logo.png"
            alt="SafeTrans International"
            width={isMobile ? 100 : 180}
            height={isMobile ? 48 : 60}
          />
          <address className={styles.address}>
            г. Москва, ул. Ленинский пр-т, д. 113/1, оф. E310
            <br />
            (10:00 – 19:00)
          </address>
        </div>

        {/* Навигация */}
        {isMobile ? null : (
          <div className={styles.nav}>
            <ul className={styles.navColumn}>
              <li>
                <button onClick={handleScroll('hero')}>Главная</button>
              </li>
              <li>
                <button onClick={handleScroll('form')}>Заявка</button>
              </li>
            </ul>
            <ul className={styles.navColumn}>
              <li>
                <button onClick={handleScroll('timetransit')}>
                  timetransit
                </button>
              </li>
              <li>
                <button onClick={handleScroll('services')}>Услуги</button>
              </li>
            </ul>
            <ul className={styles.navColumn}>
              <li>
                <button onClick={handleScroll('delivery')}>
                  Виды доставки
                </button>
              </li>
              <li>
                <button onClick={handleScroll('advantages')}>
                  Преимущества
                </button>
              </li>
            </ul>
            <ul className={styles.navColumn}>
              <li>
                <button onClick={handleScroll('contacts')}>Контакты</button>
              </li>
            </ul>
          </div>
        )}

        {/* Контакты */}
        <div className={styles.right}>
          <button className={styles.cta}>Узнать цену</button>
          <div className={styles.emails}>
            <Link href="mailto:info@timetransit.ru">info@timetransit.ru</Link>
          </div>
          <a href="tel:+74959692990" className={styles.phone}>
            +7 495 969 29 90
          </a>

          {showAllContacts && (
            <div className={styles.extraContacts}>
              <div>
                <strong>Дежурный:</strong>{' '}
                <a href="tel:+74959617561">+7 495 961-75-61</a>
              </div>
              <div>
                <strong>Виктория (логистика):</strong>{' '}
                <a href="mailto:xiaohan.l@timetransit.ru">
                  xiaohan.l@timetransit.ru
                </a>
                , <a href="tel:+79295321855">+7 929 532-18-55</a>
              </div>
              <div>
                <strong>Оксана (логистика):</strong>{' '}
                <a href="mailto:yankovskaya.o@timetransit.ru">
                  yankovskaya.o@timetransit.ru
                </a>
                , <a href="tel:+79165615626">+7 916 561-56-26</a>
              </div>
              <div>
                <strong>Анастасия (China Pay):</strong>{' '}
                <a href="mailto:xiya.j@timetransit.ru">xiya.j@timetransit.ru</a>
                , <a href="tel:+79680832429">+7 968 083-24-29</a>
              </div>
              <div>
                <strong>Юрий (транзитное переоформление):</strong>{' '}
                <a href="mailto:tsoy.y@timetransit.ru">tsoy.y@timetransit.ru</a>
                , <a href="tel:+79990002990">+7 999 000-29-90</a>
              </div>
            </div>
          )}

          <button
            onClick={() => setShowAllContacts(prev => !prev)}
            className={styles.moreContactsBtn}
          >
            {showAllContacts ? 'Скрыть контакты' : 'Показать все контакты'}
          </button>
        </div>
      </div>

      <div className={styles.copy}>
        Московское представительство «Сейфтранс Интернэшнл Компани Лимитед» ©
        2022 г.
      </div>
    </footer>
  );
}
