import Image from 'next/image';
import styles from './service-section.module.css';

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
    icon: '/icons/chinapay.svg',
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
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.header}>
        <span className={`${styles.line} ${styles.lineLeft}`} />
        <div className={styles.titleBox}>
          Наши <span className={styles.highlight}>услуги</span>
        </div>
        <span className={`${styles.line} ${styles.lineRight}`} />
      </div>

      <div className={styles.timeline}>
        {services.map((svc, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={svc.id}
              className={`${styles.timelineItem} ${
                isLeft ? styles.left : styles.right
              }`}
            >
              <div
                style={{ background: svc.bg }}
                className={`${styles.contentBox} ${
                  isLeft ? styles.leftBox : styles.rightBox
                }`}
              >
                {isLeft ? (
                  <>
                    <div className={styles.text}>
                      <h3 className={styles.title}>{svc.title}</h3>
                      <p className={styles.desc}>{svc.description}</p>
                    </div>
                    <div className={styles.iconBox}>
                      <Image
                        src={svc.icon}
                        alt={svc.title}
                        width={48}
                        height={48}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.iconBox}>
                      <Image
                        src={svc.icon}
                        alt={svc.title}
                        width={48}
                        height={48}
                      />
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
        })}
      </div>
    </section>
  );
}
