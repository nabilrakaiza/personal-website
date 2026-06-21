'use client';

import { useState } from 'react';

interface ContactFormProps {
  showSubject?: boolean;
}

export default function ContactForm({ showSubject = false }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          subject: form.subject || 'Portfolio enquiry',
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'var(--bg-surface)', border: '1px solid var(--border)',
    borderRadius: '6px', padding: '0.7rem 1rem', color: 'var(--text-primary)',
    fontSize: '0.875rem', outline: 'none', transition: 'border-color 0.2s', fontFamily: 'inherit',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em',
    display: 'block', marginBottom: '0.5rem',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {[
        { label: 'Name', name: 'name', type: 'text', placeholder: 'Frieren the Slayer' },
        { label: 'Email', name: 'email', type: 'email', placeholder: 'frieren@gmail.com' },
        ...(showSubject ? [{ label: 'Subject', name: 'subject', type: 'text', placeholder: "Want to join our party?" }] : []),
      ].map(field => (
        <div key={field.name}>
          <label className="font-mono" style={labelStyle}>{field.label.toUpperCase()}</label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={form[field.name as keyof typeof form]}
            onChange={handleChange}
            style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-mint)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>
      ))}

      <div>
        <label className="font-mono" style={labelStyle}>MESSAGE</label>
        <textarea
          name="message"
          placeholder="We need your help..."
          rows={showSubject ? 5 : 4}
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-mint)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
        />
      </div>

      {status === 'success' && (
        <div className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-mint)', padding: '0.75rem 1rem', background: 'rgba(0,255,157,0.08)', border: '1px solid rgba(0,255,157,0.2)', borderRadius: '6px' }}>
          ✓ Message sent!
        </div>
      )}

      {status === 'error' && (
        <div className="font-mono" style={{ fontSize: '0.8rem', color: '#ff6b6b', padding: '0.75rem 1rem', background: 'rgba(255,107,107,0.08)', border: '1px solid rgba(255,107,107,0.2)', borderRadius: '6px' }}>
          ✗ Something went wrong. Try emailing me directly.
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={status === 'loading'}
        className="font-mono"
        style={{
          padding: '0.85rem', background: status === 'loading' ? 'rgba(0,255,157,0.5)' : 'var(--accent-mint)',
          color: 'var(--bg-primary)', border: 'none', borderRadius: '6px',
          fontWeight: 700, fontSize: '0.875rem', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          letterSpacing: '0.05em', transition: 'all 0.2s',
          boxShadow: '0 0 20px rgba(0,255,157,0.3)',
        }}
        onMouseEnter={e => { if (status !== 'loading') (e.currentTarget.style.transform = 'translateY(-1px)'); }}
        onMouseLeave={e => { (e.currentTarget.style.transform = 'translateY(0)'); }}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message →'}
      </button>

      <style>{`input::placeholder, textarea::placeholder { color: var(--text-muted); }`}</style>
    </div>
  );
}