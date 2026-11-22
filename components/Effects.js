'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Scroll-reveal animations and stat counters; re-runs on every page change.
export default function Effects() {
  const path = usePathname();
  useEffect(() => {
    const observers = [];
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
    }), { threshold: 0.15 });
    observers.push(io);
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    const timers = [];
    document.querySelectorAll('[data-count]').forEach((el) => {
      const end = +el.dataset.count, suffix = el.dataset.suffix || '';
      const co = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        co.disconnect();
        let n = 0; const step = Math.max(1, Math.ceil(end / 60));
        const t = setInterval(() => {
          n = Math.min(end, n + step);
          el.textContent = n + suffix;
          if (n >= end) clearInterval(t);
        }, 25);
        timers.push(t);
      });
      co.observe(el);
      observers.push(co);
    });
    return () => { observers.forEach((o) => o.disconnect()); timers.forEach(clearInterval); };
  }, [path]);
  return null;
}
