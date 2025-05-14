import { useEffect, useState } from 'react';

export function useClosestCardId() {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const cards = Array.from(document.querySelectorAll('[data-timeline-id]'));
      const viewportCenter = window.innerHeight / 2;

      let closest = null;
      let minDist = Infinity;

      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(viewportCenter - center);

        if (dist < minDist) {
          minDist = dist;
          closest = card.dataset.timelineId;
        }
      });

      setActiveId(closest);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeId;
}
