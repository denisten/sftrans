import { Geist, Geist_Mono, Oswald, Bebas_Neue } from 'next/font/google';
import './globals.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const bebas = Bebas_Neue({
  variable: '--font-bebas',
  subsets: ['latin'],
  weight: ['400'],
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Safetrans',
  description: 'Logistics company',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${bebas.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
