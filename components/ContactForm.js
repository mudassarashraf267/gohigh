'use client';
import { useState } from 'react';

// Demo only: no backend. Wire onSubmit to an API route or a service like Formspree.
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  };
  return (
    <form className="card reveal" onSubmit={onSubmit}>
      <input type="text" placeholder="Your name" required />
      <input type="email" placeholder="Email address" required />
      <select required defaultValue="">
        <option value="">What do you need?</option>
        <option>Branding &amp; Design</option>
        <option>Web Development</option>
        <option>SEO</option>
        <option>Performance Marketing</option>
        <option>Other</option>
      </select>
      <textarea rows={5} placeholder="Tell us about your project" required />
      <button className="btn btn-primary" type="submit">Send Message</button>
      {sent && <div className="msg" style={{ display: 'block' }}>Thanks! We&apos;ve received your message and will reply within 24 hours.</div>}
    </form>
  );
}
