'use client';

import ContactForm from './Contactform';
import ScrollReveal from './ScrollReveal';
import { RiGithubLine, RiLinkedinLine, RiMailLine, RiDownloadLine, RiInstagramLine } from 'react-icons/ri';

const socials = [
  { icon: <RiGithubLine size={20} />, label: 'GitHub', href: 'https://github.com/nabilrakaiza' },
  { icon: <RiLinkedinLine size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nabilrakaiza/?locale=en' },
  { icon: <RiInstagramLine size={20} />, label: 'Instagram', href: 'https://www.instagram.com/nabilrakaiza' },
  { icon: <RiMailLine size={20} />, label: 'Email', href: 'mailto:nabilraka1234@gmail.com' },
];

export default function Contact() {
  return (
    <section style={{ padding: '2rem 2rem 8rem', maxWidth: '1100px', margin: '0 auto' }}>
      <ScrollReveal>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <span className="font-mono" style={{ color: 'var(--accent-mint)', fontSize: '0.8rem', letterSpacing: '0.12em' }}>05</span>
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <h2 className="font-mono" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
            contact
          </h2>
        </div>
      </ScrollReveal>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        <ScrollReveal direction="left">
          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.3 }}>
            Let&apos;s build something <span style={{ color: 'var(--accent-mint)' }}>great</span> together.
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            I&apos;m currently open to new opportunities — whether it&apos;s a full-time role, freelance project, or an interesting collaboration. Drop me a message and I&apos;ll get back to you within 24 hours.
          </p>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} title={s.label} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '44px', height: '44px',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '8px', color: 'var(--text-muted)', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--accent-mint)';
                  el.style.color = 'var(--accent-mint)';
                  el.style.boxShadow = '0 0 12px rgba(0,255,157,0.2)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--border)';
                  el.style.color = 'var(--text-muted)';
                  el.style.boxShadow = 'none';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Resume download */}
          <a href="/Resume - Nabil Rakaiza Abror - General Role.pdf" download="Resume - Nabil Rakaiza Abror - General Role.pdf" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <button className="font-mono" style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: 'transparent',
              border: '1px solid var(--accent-violet)',
              color: 'var(--accent-violet)',
              borderRadius: '4px', fontSize: '0.875rem',
              cursor: 'pointer', letterSpacing: '0.05em',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(123,97,255,0.1)';
                el.style.boxShadow = '0 0 16px rgba(123,97,255,0.3)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'transparent';
                el.style.boxShadow = 'none';
              }}
            >
              <RiDownloadLine size={16} />
              Download Resume
            </button>
          </a>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal direction="right">
          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: '12px', padding: '2rem',
          }}>
            <ContactForm showSubject={true} />
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div:last-child { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        input::placeholder, textarea::placeholder { color: var(--text-muted); }
      `}</style>
    </section>
  );
}
