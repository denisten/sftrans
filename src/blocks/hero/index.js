import Link from 'next/link';
import Image from 'next/image';
import styles from './hero.module.css';
import Slider from '@/components/slider';
import { Content } from '@/components/slider/content';

const data = [
  {
    src: '/hero-img-1.png',
    text: 'Более 25 лет осуществляем поиск и доставку товаров из Китая в Россию напрямую от производителя',
  },
  {
    src: '/hero-img-2.png',
    text: 'Мы обеспечиваем надежную доставку корреспонденции, товаров и грузов с полной прозрачностью и ответственностью.',
  },
  // {
  //   src: '/hero-img-3.png',
  //   text: 'Наша миссия - создавать удобные и безопасные логистические решения для клиентов, гарантируя индивидуальный подход.',
  // },
];

export default function Hero() {
  return (
    <section id="hero" className="fullWidth">
      <Slider autoplay={false} data={data} Content={Content} />
    </section>
  );
}
