import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';

export const useMenuPosition = (menuBtnRef: RefObject<HTMLButtonElement | null>) => {
  useEffect(() => {
    const updatePosition = () => {
      const menuBtn = menuBtnRef.current;
      const cta = document.querySelector('.cta');
      
      if (menuBtn && cta) {
        const { x, y, width, height } = menuBtn.getBoundingClientRect();
        gsap.set(cta, {
          left: x - width,
          top: y + height
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);

    return () => window.removeEventListener('resize', updatePosition);
  }, [menuBtnRef]);
}; 