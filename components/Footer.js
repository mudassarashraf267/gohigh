import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot">
          <Link href="/" className="logo">Go<span>High</span></Link>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services &amp; Contact</Link></li>
          </ul>
        </div>
        <p className="copy">© 2026 GoHigh Digital Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}
