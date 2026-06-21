'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const roles = [
  'Data Scientist',
  'ML Engineer',
  'AI Engineer',
  'NLP Engineer',
  'Data Analyst',
  'Automation Engineer',
  'Software Engineer'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section
      className="grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glows */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%', width: '400px', height: '400px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,97,255,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '10%', width: '300px', height: '300px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,157,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-mint)', display: 'inline-block', boxShadow: '0 0 8px var(--accent-mint)', animation: 'pulse 2s infinite' }} />
          <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em'}}>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-mono text-glow-mint"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: '1rem', lineHeight: 1.1 }}
        >
          Nabil Rakaiza Abror
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ marginBottom: '1.5rem', height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <span className="font-mono" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: 'var(--accent-mint)', fontWeight: 500 }}>
            {displayed}
            <span style={{ opacity: blink ? 1 : 0, transition: 'opacity 0.1s', color: 'var(--accent-mint)' }}>|</span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '560px', margin: '0 auto 2.5rem' }}
        >
          Backed by a background in Data Science and Computer Science, I focus on AI/ML and core software engineering. 
          I thrive on untangling complex problems and turning them into seamless, well-architected solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link href="/projects" style={{ textDecoration: 'none' }}>
            <button
              className="font-mono glow-mint"
              style={{
                padding: '0.75rem 1.75rem', background: 'var(--accent-mint)', color: 'var(--bg-primary)',
                border: 'none', borderRadius: '4px', fontWeight: 700, fontSize: '0.875rem',
                cursor: 'pointer', letterSpacing: '0.05em', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(0,255,157,0.5)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0,255,157,0.3)'; }}
            >
              View Projects →
            </button>
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button
              className="font-mono"
              style={{
                padding: '0.75rem 1.75rem', background: 'transparent', color: 'var(--text-primary)',
                border: '1px solid var(--border)', borderRadius: '4px', fontWeight: 500, fontSize: '0.875rem',
                cursor: 'pointer', letterSpacing: '0.05em', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-violet)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent-violet)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'; }}
            >
              Get in Touch
            </button>
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ marginTop: '4rem' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--accent-mint), transparent)' }}
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px var(--accent-mint); }
          50% { opacity: 0.5; box-shadow: 0 0 4px var(--accent-mint); }
        }
      `}</style>
    </section>
  );
}
