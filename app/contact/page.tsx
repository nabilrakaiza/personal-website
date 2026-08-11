/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import ContactForm from '../components/Contactform';
import ScrollReveal from '../components/ScrollReveal';
import { RiGithubLine, RiLinkedinLine, RiMailLine, RiDownloadLine, RiInstagramLine } from 'react-icons/ri';

const socials = [
  { icon: <RiGithubLine size={22} />, label: 'GitHub', handle: '@nabilrakaiza', href: 'https://github.com/nabilrakaiza' },
  { icon: <RiLinkedinLine size={22} />, label: 'LinkedIn', handle: 'Nabil Rakaiza Abror', href: 'https://www.linkedin.com/in/nabilrakaiza/?locale=en' },
  { icon: <RiInstagramLine size={22} />, label: 'Instagram', handle: '@nabilrakaiza', href: 'https://www.instagram.com/nabilrakaiza' },
  { icon: <RiMailLine size={22} />, label: 'Email', handle: 'nabilraka1234@gmail.com', href: 'mailto:nabilraka1234@gmail.com' },
];

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
        <ScrollReveal>
          <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-mint)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.75rem' }}>
            // contact
          </span>
          <h1 className="font-mono" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Get In Touch
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '500px', marginBottom: '3rem' }}>
            Whether it&apos;s a project, a role, or just a chat about tech — my inbox is open. I typically respond within 24 hours.
          </p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem' }}>
          {/* Left: socials + resume */}
          <ScrollReveal direction="left">
            <h3 className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Find me on
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.25rem',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: '8px', textDecoration: 'none', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--accent-mint)';
                    el.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--border)';
                    el.style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{ color: 'var(--accent-mint)' }}>{s.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>{s.label}</div>
                    <div className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>{s.handle}</div>
                  </div>
                </a>
              ))}
            </div>

            <a href="/Resume - Nabil Rakaiza Abror - General Role.pdf" download="Resume - Nabil Rakaiza Abror - General Role.pdf" style={{ textDecoration: 'none', display: 'block' }}>
              <button className="font-mono" style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%',
                justifyContent: 'center', padding: '0.8rem 1.5rem',
                background: 'transparent', border: '1px solid var(--accent-violet)',
                color: 'var(--accent-violet)', borderRadius: '6px', fontSize: '0.875rem',
                cursor: 'pointer', letterSpacing: '0.05em', transition: 'all 0.2s',
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

          {/* Right: form */}
          <ScrollReveal direction="right">
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem' }}>
              <ContactForm showSubject={true} />
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        input::placeholder, textarea::placeholder { color: var(--text-muted); }
      `}</style>
    </div>
  );
}
