import Image from 'next/image';
import styles from './features.module.css';

const features = [
  {
    id: 1,
    title: 'Гибкие условия',
    desc: 'Подбираем маршруты и тарифы индивидуально',
    icon: '/icons/flexible.svg',
    variant: 'dark',
    large: true,
  },
  {
    id: 2,
    title: 'Надежность',
    desc: 'Каждый этап под контролем',
    icon: '/icons/lock.svg',
    variant: 'blue',
  },
  {
    id: 3,
    label: 'CHINA PAY',
    icon: '/icons/chinapay.svg',
    variant: 'bright',
  },
  {
    id: 4,
    title: 'Быстрая доставка',
    desc: 'Доставим грузы в срок',
    icon: '/icons/stopwatch.svg',
    variant: 'blue',
  },
  {
    id: 5,
    title: 'Прозрачность',
    desc: 'Отслеживание в реальном времени и понятные отчеты',
    icon: '/icons/magnifier.svg',
    variant: 'dark',
    large: true,
  },
];

export default function Features() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.header}>
        <span className={styles.highlight}>Мы</span> — ваш проводник в мире
        успешных бизнес возможностей
      </h2>
      <div className={styles.list}>
        {features.map(f => (
          <div
            key={f.id}
            className={[styles.card, styles[f.variant], styles[f.size]]
              .filter(Boolean)
              .join(' ')}
          >
            {f.title && <h3 className={styles.title}>{f.title}</h3>}
            <Image
              src={f.icon}
              alt={f.title || f.label}
              width={80}
              height={80}
            />
            {f.desc && <p className={styles.desc}>{f.desc}</p>}
            {f.label && <span className={styles.label}>{f.label}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
