'use client';
import Slider from '@/components/slider';
import { DesktopContent } from './desktop-content';
import { useIsMobile } from '@/hooks/use-is-mobile';
import MobileContent from '@/blocks/hero/mobile-content';

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
  const isMobile = useIsMobile();
  return (
    <section id="hero" className="fullWidth">
      <Slider
        autoplay={false}
        data={data}
        Content={isMobile ? MobileContent : DesktopContent}
      />
    </section>
  );
}
