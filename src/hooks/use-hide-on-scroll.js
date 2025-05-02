// hooks/use-hide-on-scroll.js
import { useState, useEffect, useRef } from 'react';

/**
 * Возвращает true, если хедер должен быть видимым,
 * и false, когда пользователь скроллит вниз.
 */
export function useHideOnScroll() {
  const [visible, setVisible] = useState(true);
  const prevY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    const handleScroll = () => {
      const currY = window.scrollY;
      // если скроллим вниз и прошли хотя бы 50px, прячем
      if (currY > prevY.current && currY > 50) {
        setVisible(false);
      }
      // если скроллим вверх — показываем
      else if (currY < prevY.current) {
        setVisible(true);
      }
      prevY.current = currY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return visible;
}
