import { useCallback } from 'react';

export function useScrollTo() {
  return useCallback(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);
}
