import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="tag">🚀 Award-winning digital agency</span>
          <h1>We help brands <span className="grad">go higher</span> online.</h1>
          <p>Strategy, design and technology under one roof. We build websites, brands and campaigns that turn attention into revenue.</p>
          <div className="cta">
            <Link href="/services#contact" className="btn btn-primary">Start Your Project</Link>
            <a href="#work" className="btn btn-ghost">See Our Work</a>
          </div>
        </div>
      </section>

      <section className="alt" style={{ padding: '60px 0' }}>
        <div className="container stats reveal">
          <div><b data-count="250" data-suffix="+">0</b><span>Projects delivered</span></div>
          <div><b data-count="120" data-suffix="+">0</b><span>Happy clients</span></div>
          <div><b data-count="8" data-suffix="x">0</b><span>Average ROI</span></div>
          <div><b data-count="12" data-suffix=" yrs">0</b><span>Of experience</span></div>
        </div>
      </section>

      <section id="what">
        <div className="container">
          <div className="sec-head reveal"><h2>What we do best</h2><p>Everything your brand needs to stand out and scale.</p></div>
          <div className="grid g3">
            <div className="card reveal"><div className="icon">🎨</div><h3>Branding &amp; Design</h3><p>Identities and interfaces people remember and trust.</p></div>
            <div className="card reveal"><div className="icon">💻</div><h3>Web Development</h3><p>Fast, accessible, conversion-focused websites and web apps.</p></div>
            <div className="card reveal"><div className="icon">📈</div><h3>SEO &amp; Marketing</h3><p>Data-driven campaigns that bring qualified traffic and leads.</p></div>
          </div>
          <p style={{ textAlign: 'center', marginTop: 36 }}><Link href="/services" className="btn btn-ghost">Explore all services →</Link></p>
        </div>
      </section>

      <section id="work" className="alt">
        <div className="container">
          <div className="sec-head reveal"><h2>Selected work</h2><p>A few recent projects we&apos;re proud of.</p></div>
          <div className="grid g2">
            <div className="work w1 reveal"><div><small>E-commerce</small><h3>Lumo Skincare – +180% online sales</h3></div></div>
            <div className="work w2 reveal"><div><small>SaaS</small><h3>Flowly – Website &amp; product redesign</h3></div></div>
            <div className="work w3 reveal"><div><small>Branding</small><h3>Bloom Café – Full brand identity</h3></div></div>
            <div className="work w4 reveal"><div><small>Marketing</small><h3>Nexa Fitness – 5x lead growth</h3></div></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="sec-head reveal"><h2>Clients love working with us</h2></div>
          <div className="grid g3">
            <div className="card quote reveal"><p>“GoHigh rebuilt our site and our sales doubled in four months. Brilliant team.”</p><b>Sara Ahmed</b><small>CEO, Lumo Skincare</small></div>
            <div className="card quote reveal"><p>“Communication was great and the design exceeded every expectation.”</p><b>Daniel Park</b><small>Founder, Flowly</small></div>
            <div className="card quote reveal"><p>“Our SEO traffic tripled. They truly act like part of our team.”</p><b>Maria Lopez</b><small>Marketing Lead, Nexa</small></div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band reveal">
            <h2>Ready to take your brand higher?</h2>
            <p>Tell us about your project and get a free consultation.</p>
            <Link href="/services#contact" className="btn btn-primary">Let&apos;s Talk</Link>
          </div>
        </div>
      </section>
    </>
  );
}
