// components/MapMoscow.jsx
'use client';

import { useEffect } from 'react';
import styles from './map.module.css';

const officeCoords = [55.655803, 37.498249];

export default function Map() {
  useEffect(() => {
    // динамически добавляем скрипт Яндекс.Карт
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // ждём готовности API
      ymaps.ready(() => {
        const map = new ymaps.Map('yandex-map', {
          center: officeCoords,
          zoom: 16,
          controls: [], // убираем все контролы
        });

        map.behaviors.disable([
          'scrollZoom', // скролл-колёсиком
          'dblClickZoom', // двойной клик
          'multiTouch', // жест «пинч» на тач-устройствах
        ]);
        // добавляем маркер
        const placemark = new ymaps.Placemark(
          officeCoords,
          {}, // без свойств
          {
            // опции: стандартный красный маркер
            preset: 'islands#redDotIcon',
          }
        );
        map.geoObjects.add(placemark);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className={`${styles.mapWrapper} fullWidth`} id="contacts">
      <div id="yandex-map" className={styles.map} />
    </section>
  );
}
