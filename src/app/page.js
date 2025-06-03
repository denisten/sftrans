import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/header';
import Hero from '@/blocks/hero';
import Form from '@/blocks/form';
import TimetransitBrand from '@/blocks/timetransit-brand';
import ServicesSection from '@/blocks/service-section';
import DeliveryTypes from '@/blocks/delivery-types';
import Features from '@/blocks/features';
import SectionAdvantages from '@/blocks/advantages';
import FreeDeclaration from '@/blocks/free-declaration';
import OurClients from '@/blocks/our-clients';
import Map from '@/blocks/map';
import Footer from '@/blocks/footer';
import Partners from '@/blocks/partners';
import AdvantagesMobile from '@/blocks/advantages/advantages-mobile';
import BusinessTourBlock from '@/blocks/business-tour';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <Form />
      <ServicesSection />
      <DeliveryTypes />
      <Features />
      <SectionAdvantages />
      <BusinessTourBlock />
      <TimetransitBrand />
      {/*<FreeDeclaration />*/}
      <OurClients />
      {/*<Partners />*/}
      <Map />
      <Footer />
    </div>
  );
}
