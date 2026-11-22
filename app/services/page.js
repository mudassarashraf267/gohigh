import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Services & Contact – GoHigh Digital Agency',
  description: "Explore GoHigh's services, process and pricing, and get in touch for a free consultation.",
};

const services = [
  ['🎨', 'Branding & UI/UX', 'Identity that connects.', ['Logo & brand guidelines', 'UX research', 'Interface design']],
  ['💻', 'Web Development', 'Fast and scalable builds.', ['Business websites', 'E-commerce stores', 'Custom web apps']],
  ['🔍', 'SEO', 'Be found when it matters.', ['Technical audits', 'Content strategy', 'Link building']],
  ['📣', 'Performance Marketing', 'Ads that pay back.', ['Google & Meta ads', 'Funnel optimisation', 'Analytics & reporting']],
  ['📱', 'Social Media', 'Build a loyal audience.', ['Content creation', 'Community management', 'Influencer campaigns']],
  ['🎬', 'Video & Motion', 'Stories that move.', ['Promo videos', 'Animated explainers', 'Short-form content']],
];

const steps = [
  ['Discover', 'We learn your goals, audience and competitors.'],
  ['Design', 'Strategy and visuals shaped with your feedback.'],
  ['Develop', 'We build, test and polish every detail.'],
  ['Deliver & Grow', 'Launch, measure and keep improving results.'],
];

const plans = [
  { name: 'Starter', price: '$1,500', per: ' / project', items: ['5-page website', 'Basic SEO setup', '2 revisions'] },
  { name: 'Growth ⭐', price: '$3,500', per: ' / project', featured: true, items: ['10-page custom website', 'Branding kit', 'SEO & analytics', 'Priority support'] },
  { name: 'Scale', price: '$2,000', per: ' / month', items: ['Dedicated team', 'Ads & SEO management', 'Monthly reporting'] },
];

const faqs = [
  ['How long does a website take?', 'Most business sites launch in 3–6 weeks depending on scope.'],
  ['Do you offer ongoing support?', 'Yes. Maintenance and growth retainers are available after launch.'],
  ['Can we start with a small project?', 'Absolutely. Many clients start with one service and expand.'],
];

export default function Services() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <span className="tag">Our Services</span>
          <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3.6rem)' }}>Solutions built for <span className="grad">growth</span></h1>
          <p>From first idea to long-term scale, we cover the whole digital journey.</p>
        </div>
      </div>

      <section style={{ paddingTop: 40 }}>
        <div className="container"><div className="grid g3">
          {services.map(([icon, title, desc, list]) => (
            <div className="card reveal" key={title}>
              <div className="icon">{icon}</div><h3>{title}</h3><p>{desc}</p>
              <ul>{list.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div></div>
      </section>

      <section className="alt">
        <div className="container">
          <div className="sec-head reveal"><h2>How we work</h2><p>A simple, transparent process.</p></div>
          <div className="grid g2 steps">
            {steps.map(([t, d]) => (
              <div className="step reveal" key={t}><h3>{t}</h3><p style={{ color: 'var(--muted)' }}>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="sec-head reveal"><h2>Simple pricing</h2><p>Starting points – every project is tailored.</p></div>
          <div className="grid g3">
            {plans.map((p) => (
              <div className={`card reveal${p.featured ? ' featured' : ''}`} key={p.name}>
                <h3>{p.name}</h3>
                <div className="price">{p.price}<small>{p.per}</small></div>
                <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="sec-head reveal"><h2>FAQ</h2></div>
          {faqs.map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="sec-head reveal"><h2>Let&apos;s build something great</h2><p>Share a few details and we&apos;ll respond within 24 hours.</p></div>
          <div className="grid g2" style={{ alignItems: 'start' }}>
            <ContactForm />
            <div className="info card reveal">
              <p><b>📍 Office</b>221 Creative Avenue, Suite 5, Your City</p>
              <p><b>✉️ Email</b>hello@gohigh.agency</p>
              <p><b>📞 Phone</b>+1 (555) 123-4567</p>
              <p><b>🕒 Hours</b>Mon–Fri, 9am – 6pm</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
