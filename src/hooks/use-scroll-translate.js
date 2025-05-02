// hooks/use-scroll-translate.js
import { useState, useEffect } from 'react';

/**
 * Вместо сравнения с верхом wrapper, смотрим на его низ:
 * номер меняется, когда верх карточки проходит нижнюю границу цифр.
 *
 * @param {React.RefObject<HTMLElement>} wrapperRef — обёртка цифр
 * @param {Array<React.RefObject<HTMLElement>>} plateRefs — рефы карточек
 * @returns {number} translateY
 */
export function useScrollTranslate(wrapperRef, plateRefs) {
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    const plates = plateRefs.map(r => r.current).filter(Boolean);
    if (!wrapperEl || plates.length === 0) return;

    // высота обёртки = rowHeight
    const getRowHeight = () => wrapperEl.getBoundingClientRect().height;

    // основной обработчик
    const onScroll = () => {
      const { top, height } = wrapperEl.getBoundingClientRect();
      const wrapperBottom = top + height;
      let newIndex = 0;

      for (let i = 0; i < plates.length; i++) {
        const plateTop = plates[i].getBoundingClientRect().top;
        // переключаем, когда верх карточки поднимается выше низа цифр
        if (plateTop <= wrapperBottom - 1) {
          newIndex = i;
        } else {
          break;
        }
      }

      setTranslate(-newIndex * getRowHeight());
    };

    // слушаем scroll и resize (чтобы rowHeight пересчитывался)
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll(); // инициализация

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [wrapperRef, plateRefs]);

  return translate;
}
