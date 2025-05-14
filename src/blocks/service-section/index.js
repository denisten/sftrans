'use client';

import Image from 'next/image';
import styles from './service-section.module.css';
import { motion } from 'framer-motion';
import { useClosestCardId } from '@/hooks/use-closest-card-id';
import { useIsMobile } from '@/hooks/use-is-mobile';
import ServiceCard from '@/components/service-card';
import ServiceCardMobile from '@/components/service-card/service-card-mobile';

const services = [
  {
    id: 1,
    title: 'Логистика',
    description:
      'Мы обеспечиваем полный цикл услуг, от организации транспортировки до доставки вашего груза в срок и в целости.',
    icon: '/icons/logistics.svg',
    bg: '#000',
  },
  {
    id: 2,
    title: 'Параллельный импорт',
    description:
      'Полное сопровождение поставок от производителя до клиента. Поиск, проверка контрагентов, контроль качества, юридическое сопровождение.',
    icon: '/icons/parallel-import.svg',
    bg: '#00003E',
  },
  {
    id: 3,
    title: 'Транзитное переоформление',
    description:
      'Приобретение товаров из 3-х стран с официальной возможностью ввоза на территорию РФ.',
    icon: '/icons/transit.svg',
    bg: '#000053',
  },
  {
    id: 4,
    title: 'Лизинг и кредитование',
    description:
      'Гибкие финансовые инструменты для закупок. Выкуп оборудования в рассрочку или под залог.',
    icon: '/icons/leasing.svg',
    bg: '#000070',
  },
  {
    id: 5,
    title: 'Платежи в КНР',
    description:
      'Мы обеспечиваем надёжные и безопасные международные расчёты. Аккредитованный участник системы China Pay.',
    icon: '/icons/china-pay-service.svg',
    bg: '#00009D',
  },
  {
    id: 6,
    title: 'Таможенное оформление',
    description:
      'Профессиональный подбор кодов ТНВЭД, сертификация, декларационное сопровождение.',
    icon: '/icons/customs.svg',
    bg: '#0000B5',
  },
  {
    id: 7,
    title: 'Денежные переводы',
    description:
      'Надёжные и оперативные переводы в рублях по курсу ЦБ, без задержек и возвратов.',
    icon: '/icons/transfer.svg',
    bg: '#0000EA',
  },
  {
    id: 8,
    title: 'Складские услуги',
    description:
      'Осуществляем полный контроль за сохранностью и учётом продукции. Надёжное хранение товаров любой сложности.',
    icon: '/icons/warehouse.svg',
    bg: '#0000FF',
  },
];

export default function ServicesSection() {
  const activeId = useClosestCardId();
  const isMobile = useIsMobile();

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.header}>
        <span className={`${styles.line} ${styles.lineLeft}`} />
        <div className={styles.titleBox}>
          Наши <span className={styles.highlight}>услуги</span>
        </div>
        <span className={`${styles.line} ${styles.lineRight}`} />
      </div>

      {isMobile ? (
        <div className={styles.timeline}>
          {services.map(svc => (
            <ServiceCardMobile svc={svc} key={svc.id} />
          ))}
        </div>
      ) : (
        <div className={styles.timeline}>
          {services.map((svc, i) => {
            const isActive = String(svc.id) === activeId;
            const activeIndex = services.findIndex(
              s => String(s.id) === activeId
            );
            const isBefore = i === activeIndex - 1;
            const isAfter = i === activeIndex + 1;

            return (
              <ServiceCard
                key={svc.id}
                svc={svc}
                isBefore={isBefore}
                isAfter={isAfter}
                isLeft={i % 2 === 0}
                isActive={isActive}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
