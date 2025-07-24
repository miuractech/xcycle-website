import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { vec2, Vec2 } from '../utils/vector';

interface CursorState {
  position: {
    previous: Vec2;
    current: Vec2;
    target: Vec2;
    lerpAmount: number;
  };
  scale: {
    previous: number;
    current: number;
    target: number;
    lerpAmount: number;
  };
  isHovered: boolean;
  hoverEl: HTMLElement | null;
}

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<CursorState>({
    position: {
      previous: vec2(-100, -100),
      current: vec2(-100, -100),
      target: vec2(-100, -100),
      lerpAmount: 0.1
    },
    scale: {
      previous: 1,
      current: 1,
      target: 1,
      lerpAmount: 0.1
    },
    isHovered: false,
    hoverEl: null
  });

  const updateCursor = () => {
    const state = stateRef.current;
    const cursor = cursorRef.current;
    if (!cursor) return;

    state.position.current.lerp(state.position.target, state.position.lerpAmount);
    state.scale.current = gsap.utils.interpolate(
      state.scale.current,
      state.scale.target,
      state.scale.lerpAmount
    );

    const delta = state.position.current.clone().sub(state.position.previous);
    state.position.previous.copy(state.position.current);
    state.scale.previous = state.scale.current;

    gsap.set(cursor, {
      x: state.position.current.x,
      y: state.position.current.y
    });

    if (!state.isHovered) {
      const angle = Math.atan2(delta.y, delta.x) * (180 / Math.PI);
      const distance = Math.sqrt(delta.x * delta.x + delta.y * delta.y) * 0.04;

      gsap.set(cursor, {
        rotate: angle,
        scaleX: state.scale.current + Math.min(distance, 1),
        scaleY: state.scale.current - Math.min(distance, 0.3)
      });
    }
  };

  const updateTargetPosition = (x: number, y: number) => {
    const state = stateRef.current;
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (state.isHovered && state.hoverEl) {
      const bounds = state.hoverEl.getBoundingClientRect();
      const cx = bounds.x + bounds.width / 2;
      const cy = bounds.y + bounds.height / 2;
      const dx = x - cx;
      const dy = y - cy;

      state.position.target.x = cx + dx * 0.15;
      state.position.target.y = cy + dy * 0.15;
      state.scale.target = 3;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const distance = Math.sqrt(dx * dx + dy * dy) * 0.01;

      gsap.set(cursor, { rotate: angle });
      gsap.to(cursor, {
        scaleX: state.scale.target + Math.pow(Math.min(distance, 0.6), 3) * 3,
        scaleY: state.scale.target - Math.pow(Math.min(distance, 0.3), 3) * 3,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true
      });
    } else {
      state.position.target.x = x;
      state.position.target.y = y;
      state.scale.target = 1;
    }
  };

  const setupHoverListeners = () => {
    const hoverElements = document.querySelectorAll('[data-hover]');
    
    hoverElements.forEach((hoverEl) => {
      const hoverBoundsEl = hoverEl.querySelector('[data-hover-bounds]') as HTMLElement;
      
      if (hoverBoundsEl) {
        // Set hover states
        hoverBoundsEl.addEventListener('pointerover', () => {
          stateRef.current.isHovered = true;
          stateRef.current.hoverEl = hoverBoundsEl;
        });
        
        hoverBoundsEl.addEventListener('pointerout', () => {
          stateRef.current.isHovered = false;
          stateRef.current.hoverEl = null;
        });
      }

      // Magnetic effect
      const xTo = gsap.quickTo(hoverEl, 'x', {
        duration: 1,
        ease: 'elastic.out(1, 0.3)'
      });
      const yTo = gsap.quickTo(hoverEl, 'y', {
        duration: 1,
        ease: 'elastic.out(1, 0.3)'
      });

      hoverEl.addEventListener('pointermove', (event: Event) => {
        const pointerEvent = event as PointerEvent;
        const { clientX: cx, clientY: cy } = pointerEvent;
        const { height, width, left, top } = (hoverEl as HTMLElement).getBoundingClientRect();
        const x = cx - (left + width / 2);
        const y = cy - (top + height / 2);
        xTo(x * 0.2);
        yTo(y * 0.2);
      });

      hoverEl.addEventListener('pointerout', () => {
        xTo(0);
        yTo(0);
      });
    });
  };

  useEffect(() => {
    const handleMouseMove = (event: PointerEvent) => {
      updateTargetPosition(event.clientX, event.clientY);
    };

    // Set up GSAP ticker
    gsap.ticker.add(updateCursor);
    
    // Set up event listeners
    window.addEventListener('pointermove', handleMouseMove);
    
    // Set up hover listeners with a small delay to ensure DOM is ready
    setTimeout(setupHoverListeners, 100);

    return () => {
      gsap.ticker.remove(updateCursor);
      window.removeEventListener('pointermove', handleMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className="cursor" />;
}; 