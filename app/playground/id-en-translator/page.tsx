/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowLeftLine, RiTranslate2, RiFileCopyLine, RiCheckLine, RiDeleteBinLine } from 'react-icons/ri';

const EXAMPLES = [
  'Aku suka kamu',
  'Apa yang akan kau lakukan',
  'Dia akan kembali padaku',
  'Aku tak tahu',
];

const MAX_CHARS = 500;

export default function TranslatorPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const translate = async (text?: string) => {
    const toTranslate = text ?? input;
    if (!toTranslate.trim()) return;

    setStatus('loading');
    setOutput('');
    setErrorMsg('');

    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: toTranslate }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Translation failed.');
        setStatus('error');
        return;
      }

      setOutput(data.translation);
      setStatus('success');
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  const handleExample = (example: string) => {
    setInput(example);
    translate(example);
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setStatus('idle');
    setErrorMsg('');
  };

  const panelStyle: React.CSSProperties = {
    flex: 1,
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    minHeight: '320px',
  };

  const panelHeaderStyle: React.CSSProperties = {
    padding: '0.875rem 1.25rem',
    borderBottom: '1px solid var(--border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'var(--bg-surface)',
  };

  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>

        {/* Back link */}
        <Link href="/playground" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '2rem', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
        >
          <RiArrowLeftLine size={14} /> Back to Playground
        </Link>

        {/* Header */}
        <div style={{ marginBottom: '0.75rem' }}>
          <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-violet)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>
            // playground
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <h1 className="font-mono" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
              ID → EN Translator
            </h1>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '700px', marginBottom: '0.5rem' }}>
            A neural machine translation model I built from scratch. I utilized vanilla Transformer with custom tokenizer (RegexTokenizer from Andrej Karpathy video). It was trained on the Helsinki-NLP/opus-100 dataset. However, since I only use 50K sentences, the translation might not be good. 
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {['Python', 'PyTorch', 'Transformer', 'BPE Tokenizer', 'NLP', 'AI'].map(tag => (
              <span key={tag} className="font-mono" style={{
                fontSize: '0.68rem', color: 'var(--accent-violet)',
                border: '1px solid rgba(123,97,255,0.3)', borderRadius: '3px',
                padding: '0.2rem 0.5rem', background: 'rgba(123,97,255,0.08)',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Example prompts */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', marginRight: '0.75rem' }}>
            TRY AN EXAMPLE:
          </span>
          <div style={{ display: 'inline-flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            {EXAMPLES.map(ex => (
              <button
                key={ex}
                onClick={() => handleExample(ex)}
                className="font-mono"
                style={{
                  fontSize: '0.75rem', padding: '0.3rem 0.75rem',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: '4px', color: 'var(--text-muted)', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--accent-violet)';
                  el.style.color = 'var(--accent-violet)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--border)';
                  el.style.color = 'var(--text-muted)';
                }}
              >
                {ex}
              </button>
            ))}
          </div>
        </div>

        {/* Translator panels */}
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'stretch' }} className="translator-grid">

          {/* Input panel */}
          <div style={panelStyle}>
            <div style={panelHeaderStyle}>
              <span className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--accent-mint)', letterSpacing: '0.08em' }}>
                INDONESIAN
              </span>
              <button
                onClick={handleClear}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', transition: 'color 0.2s', padding: 0 }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#ff6b6b'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
              >
                <RiDeleteBinLine size={13} /> Clear
              </button>
            </div>
            <textarea
              value={input}
              onChange={e => {
                if (e.target.value.length <= MAX_CHARS) setInput(e.target.value);
              }}
              onKeyDown={e => {
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) translate();
              }}
              placeholder="Ketik teks bahasa Indonesia di sini..."
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                padding: '1.25rem', color: 'var(--text-primary)', fontSize: '1rem',
                lineHeight: 1.7, resize: 'none', fontFamily: 'inherit',
              }}
            />
            <div style={{ padding: '0.75rem 1.25rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="font-mono" style={{ fontSize: '0.72rem', color: input.length > MAX_CHARS * 0.9 ? '#ff6b6b' : 'var(--text-muted)' }}>
                {input.length} / {MAX_CHARS}
              </span>
              <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                ⌘↵ to translate
              </span>
            </div>
          </div>

          {/* Translate button */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <button
              onClick={() => translate()}
              disabled={status === 'loading' || !input.trim()}
              style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: status === 'loading' ? 'rgba(0,255,157,0.2)' : 'var(--accent-mint)',
                border: 'none', cursor: status === 'loading' || !input.trim() ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--bg-primary)', transition: 'all 0.2s',
                boxShadow: input.trim() && status !== 'loading' ? '0 0 20px rgba(0,255,157,0.4)' : 'none',
                opacity: !input.trim() ? 0.4 : 1,
              }}
              onMouseEnter={e => { if (input.trim() && status !== 'loading') (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
            >
              {status === 'loading' ? (
                <div style={{ width: '18px', height: '18px', border: '2px solid var(--bg-primary)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
              ) : (
                <RiTranslate2 size={20} />
              )}
            </button>
          </div>

          {/* Output panel */}
          <div style={panelStyle}>
            <div style={panelHeaderStyle}>
              <span className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--accent-violet)', letterSpacing: '0.08em' }}>
                ENGLISH
              </span>
              <button
                onClick={handleCopy}
                disabled={!output}
                style={{
                  background: 'none', border: 'none', cursor: output ? 'pointer' : 'not-allowed',
                  color: copied ? 'var(--accent-mint)' : 'var(--text-muted)',
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                  fontSize: '0.75rem', transition: 'color 0.2s', padding: 0,
                  opacity: output ? 1 : 0.4,
                }}
                onMouseEnter={e => { if (output) (e.currentTarget as HTMLElement).style.color = 'var(--accent-mint)'; }}
                onMouseLeave={e => { if (!copied) (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
              >
                {copied ? <RiCheckLine size={13} /> : <RiFileCopyLine size={13} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <div style={{ flex: 1, padding: '1.25rem', position: 'relative', overflow: 'auto' }}>
              <AnimatePresence mode="wait">
                {status === 'loading' && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.25rem' }}
                  >
                    {[80, 60, 40].map((w, i) => (
                      <div key={i} style={{ height: '16px', width: `${w}%`, background: 'var(--bg-surface)', borderRadius: '4px', animation: 'pulse 1.5s ease-in-out infinite', animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </motion.div>
                )}

                {status === 'success' && output && (
                  <motion.p
                    key="output"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.7, margin: 0 }}
                  >
                    {output}
                  </motion.p>
                )}

                {status === 'error' && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-mono"
                    style={{ fontSize: '0.8rem', color: '#ff6b6b' }}
                  >
                    ✗ {errorMsg}
                  </motion.p>
                )}

                {status === 'idle' && (
                  <motion.p
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}
                  >
                    Translation will appear here...
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div style={{ padding: '0.75rem 1.25rem', borderTop: '1px solid var(--border)' }}>
              <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                {output ? `${output.split(' ').length} words` : '\u00A0'}
              </span>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '1.5rem', textAlign: 'center' }}>
          Model hosted on{' '}
          <a href="https://huggingface.co/spaces/nabilrakaiza/id-en-translator-api" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-violet)', textDecoration: 'none' }}>
            Hugging Face Spaces
          </a>
          {' '}· First request may take ~30s if the Space is cold starting
        </p>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        textarea::placeholder { color: var(--text-muted); }
        @media (max-width: 768px) {
          .translator-grid { flex-direction: column !important; }
          .translator-grid > div:nth-child(2) { transform: rotate(90deg); }
        }
      `}</style>
    </div>
  );
}
