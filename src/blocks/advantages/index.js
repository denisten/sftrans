'use client';
import { useIsMobile } from '@/hooks/use-is-mobile';
import AdvantagesMobile from '@/blocks/advantages/advantages-mobile';
import AdvantagesDesktop from '@/blocks/advantages/advantages-desktop';

export default function AdvantagesSection() {
  const isMobile = useIsMobile();
  return isMobile ? <AdvantagesMobile /> : <AdvantagesDesktop />;
}
