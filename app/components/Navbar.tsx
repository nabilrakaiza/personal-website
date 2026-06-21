'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Playground', href: '/playground', special: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 2rem',
      }}
    >
      <nav style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span className="font-mono" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-mint)', letterSpacing: '-0.02em' }}>
            {'Nabil Rakaiza Abror'}
          </span>
        </Link>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link href={link.href} style={{ textDecoration: 'none' }}>
                  {link.special ? (
                    <span className="font-mono" style={{
                      fontSize: '0.875rem',
                      color: 'var(--accent-violet)',
                      border: '1px solid var(--accent-violet)',
                      padding: '0.35rem 0.9rem',
                      borderRadius: '4px',
                      transition: 'all 0.2s',
                      display: 'inline-block',
                      background: isActive ? 'rgba(123,97,255,0.15)' : 'transparent',
                    }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(123,97,255,0.2)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(123,97,255,0.4)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = isActive ? 'rgba(123,97,255,0.15)' : 'transparent';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}
                    >
                      playground
                    </span>
                  ) : (
                    <span className="font-mono" style={{
                      fontSize: '0.875rem',
                      color: isActive ? 'var(--accent-mint)' : 'var(--text-muted)',
                      transition: 'color 0.2s',
                      position: 'relative',
                    }}
                      onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'; }}
                      onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
                    >
                      {link.label.toLowerCase()}
                      {isActive && (
                        <span style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '1px', background: 'var(--accent-mint)', boxShadow: '0 0 6px var(--accent-mint)' }} />
                      )}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '1.5rem', display: 'none' }}
        >
          {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', padding: '1rem 2rem' }}
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', display: 'block', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
                <span className="font-mono" style={{ color: link.special ? 'var(--accent-violet)' : 'var(--text-primary)', fontSize: '0.9rem' }}>
                  {link.label.toLowerCase()}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.header>
  );
}
