'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header>
      <div className="container">
        <nav>
          <Link href="/" className="logo">Go<span>High</span></Link>
          <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
          <ul className={`links${open ? ' open' : ''}`}>
            <li><Link href="/" className={path === '/' ? 'active' : ''} onClick={close}>Home</Link></li>
            <li><Link href="/services" className={path === '/services' ? 'active' : ''} onClick={close}>Services &amp; Contact</Link></li>
            <li><Link href="/services#contact" className="btn btn-primary" onClick={close}>Get a Quote</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
