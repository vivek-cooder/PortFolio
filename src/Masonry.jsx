'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/* ------------------ MEDIA QUERY HOOK ------------------ */
const useMedia = (queries, values, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const handler = () => setValue(values[queries.findIndex(q => window.matchMedia(q).matches)] ?? defaultValue);
    queries.forEach(q => window.matchMedia(q).addEventListener('change', handler));
    handler(); // Initial call
    return () => queries.forEach(q => window.matchMedia(q).removeEventListener('change', handler));
  }, [queries, values, defaultValue]);

  return value;
};

/* ------------------ MEASURE HOOK ------------------ */
const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      setSize({ width, height });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, size];
};

/* ------------------ MASONRY COMPONENT ------------------ */
const Masonry = ({
  items = [],
  duration = 1.8,
  ease = 'power3.out',
  animateFrom = 'bottom',
  blurToFocus = true,
  scaleOnHover = true,
  hoverScale = 0.95
}) => {
  const containerRef = useRef(null);
  const [wrapperRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)'],
    [5, 4, 3],
    2
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Preload logic simplified
    const promises = items.map(item => new Promise(resolve => {
      const img = new Image();
      img.src = item.img;
      img.onload = img.onerror = resolve;
    }));
    Promise.all(promises).then(() => setImagesReady(true));
  }, [items]);

  const { grid, totalHeight } = useMemo(() => {
    if (!width || !items.length) return { grid: [], totalHeight: 0 };

    const colCount = columns || 1;
    const colHeights = new Array(colCount).fill(0);
    const columnWidth = width / colCount;

    const positioned = items.map(item => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const height = (item.height || 400) / 2;
      const y = colHeights[col];
      colHeights[col] += height;
      return { ...item, x, y, w: columnWidth, h: height };
    });

    return { grid: positioned, totalHeight: Math.max(...colHeights) };
  }, [items, width, columns]);

  useIsomorphicLayoutEffect(() => {
    if (!imagesReady || !grid.length) return;

    const ctx = gsap.context(() => {
      grid.forEach(item => {
        const el = document.querySelector(`[data-key="${item.id}"]`);
        if (!el) return;

        // Set starting state
        gsap.set(el, {
          x: item.x,
          y: item.y + (animateFrom === 'bottom' ? 50 : -50),
          opacity: 0,
          filter: blurToFocus ? 'blur(10px)' : 'none'
        });

        // Create Scroll Animation
        gsap.to(el, {
          x: item.x,
          y: item.y,
          opacity: 1,
          filter: 'blur(0px)',
          duration,
          ease,
          scrollTrigger: {
            trigger: el,
            start: 'top 75%', 
            toggleActions: 'restart none none reverse' // Animates every time it enters view
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [grid, imagesReady]);

  return (
    <div
      ref={el => {
        wrapperRef.current = el;
        containerRef.current = el;
        
      }}
      style={{
        position: 'relative',
        width: '90%',        // SET TO 90%
        margin: '0 auto',    // CENTERS THE 90% DIV
        minHeight: '90vh',   // SET TO 90% VIEWPORT HEIGHT
        height: totalHeight > 0 ? totalHeight : '90vh' 
      }}
    >
      {grid.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          onClick={() => window.open(item.url, '_blank', 'noopener')}
          style={{
            position: 'absolute',
            width: item.w,
            height: item.h,
            backgroundImage: `url(${item.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '20px',
            cursor: 'pointer',
            boxSizing: 'border-box',
            border: '8px solid transparent', // Creates the "gap" between items
            backgroundClip: 'padding-box'
          }}
        />
      ))}
    </div>
  );
};

export default Masonry;