/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { RiExternalLinkLine, RiGithubLine } from 'react-icons/ri';

const allProjects = [
  { title: 'Interruptible MLE Agent', description: 'A tree-search LLM agent for ML engineering that you can watch and steer mid-run through structured human interventions (prune, redirect, inject knowledge). Across 118 MLE-bench Lite runs, every text-task run beat the leaderboard median. NUS DSA4213 project.', tags: ['Python', 'LLM Agents', 'MLE-bench', 'Streamlit', 'Docker', 'OpenRouter', 'AI'], github: 'https://github.com/nabilrakaiza/interruptible-mle-agent', accent: '#ff6b6b', category: 'AI Systems' },
  { title: 'Capacity-Aware Fraud Review System', description: 'Team project (5 people): a fraud-review system that scores each payment and returns ACCEPT, REVIEW or BLOCK while keeping review volume within analysts\' daily capacity. I built the Short-Window Activity component, which flags cards transacting far faster than their usual pace.', tags: ['Python', 'Fraud Detection', 'Streaming', 'PostgreSQL', 'AWS', 'Model Monitoring', 'Machine Learning'], accent: '#00d4ff', category: 'Machine Learning' },
  { title: 'papertrail',description: 'Trained n-gram, RNN, LSTM and Transformer language models from scratch on WikiText-2 with one shared pipeline, comparing perplexity, training cost, inference speed and generation quality. The Transformer reached the lowest test perplexity.', tags: ['Python', 'PyTorch', 'Language Models', 'LSTM', 'Transformer', 'Word2Vec', 'GloVe', 'NLP'], github: 'https://github.com/nabilrakaiza/papertrail', accent: '#00d4ff', category: 'Machine Learning' },
  { title: 'paperflash', description: 'A GPT-1-style decoder-only Transformer built from scratch (own BPE tokenizer, attention and training loop) to study how small transformers learn modular arithmetic. Reproduces grokking and the Fourier-based algorithm the model ends up using.', tags: ['Python', 'PyTorch', 'Transformer', 'Interpretability', 'Grokking', 'NLP', 'AI'], github: 'https://github.com/nabilrakaiza/paperflash', accent: '#00d4ff', category: 'Machine Learning' },
  { title: 'social-sim-rag', description: 'A narrative social sim where no dialogue is scripted. Each character answers from her own memory, retrieved from pgvector with hybrid full-text + vector search. An evaluation harness raised retrieval MRR from 0.47 to 0.86.', tags: ['TypeScript', 'Next.js', 'RAG', 'pgvector', 'Supabase', 'Gemini', 'AI'], github: 'https://github.com/nabilrakaiza/socialsim-rag', live: '/playground/socialsim', accent: '#ff6b6b', category: 'AI Systems' },
  { title: 'Indo-English Translation Machine', description: 'A mini Indonesian-English translation machine built from scratch.', tags: ['Python', 'PyTorch', 'Transformer', 'BPE Tokenizer', 'NLP', 'AI'], github: 'https://github.com/nabilrakaiza/id-en-translator', live: '/playground/id-en-translator', accent: '#ff6b6b', category: 'AI Systems' },
  { title: 'Fairy Chess Machine', description: 'Implementation of minimax + alpha-beta pruning to play fairy chess.', tags: ['Algorithm', 'Classical AI', 'Adversarial Search', 'AI'], live: '/playground/fairy-chess-machine', accent: '#ff6b6b', category: 'AI Systems' },
  { title: 'GrindHub', description: 'A cross-platform React Native app for task management and study tracking, with a Node.js/PostgreSQL REST API and an AI study-assistant chatbot.', tags: ['JavaScript', 'Node.js', 'PostgreSQL', 'Figma', 'Railway', 'Python', 'LangChain', 'Gemini'], github: 'https://github.com/zayyankece/GrindHub', accent: '#7b61ff', category: 'Fullstack' },
  { title: 'Papper', description: 'A cross-platform, multi-role React Native POS system on Supabase that automates stock deduction, Bluetooth receipt printing and sales analytics. In daily use, handling 50+ orders a day.', tags: ['React', 'React Native', 'TypeScript', 'PostgreSQL', 'Supabase', 'Expo', 'Tailwind CSS'], github: 'https://github.com/nabilrakaiza/Papper', accent: '#7b61ff', category: 'Fullstack' },
  { title: 'Automatic Survey Analyzer', description: 'An automated Python pipeline using XGBoost, SHAP and DBSCAN to analyze where respondents drop off a survey and profile who they are.', tags: ['Python', 'Pandas', 'sklearn', 'Gemini', 'Streamlit'], github: 'https://github.com/nabilrakaiza/automatic-survey-analyzer', accent: '#ff6b6b', category: 'AI Systems' },
  { title: 'Monitoring Human Mobility with Smartphones', description: 'Compared traditional and deep learning models for recognizing human activity from smartphone sensor data.', tags: ['Python', 'sklearn', 'Pandas', 'PyTorch', 'Machine Learning'], github: 'https://github.com/nabilrakaiza/human-activity-recognition', accent: '#00d4ff', category: 'Machine Learning' },
  { title: 'Oil Temperature Transformers Time Series Prediction', description: 'Compared 12+ machine learning and deep learning models for predicting transformer oil temperature from time-series data.', tags: ['Python', 'sklearn', 'Pandas', 'numpy'], github: 'https://github.com/nabilrakaiza/it1244-project', accent: '#00d4ff', category: 'Machine Learning' },
  { title: 'HDB Resale Price Regression Analysis', description: 'An interpretable linear regression model for Singapore HDB resale prices, using proximity features geocoded with the OneMap API (adjusted R² of 0.895).', tags: ['Python', 'statsmodels', 'Pandas', 'OneMap API'], github: 'https://github.com/nabilrakaiza/hdb-resale-price', accent: '#00d4ff', category: 'Machine Learning' },  
  { title: 'Personal Website', description: 'Well, you are seeing it now.', tags: ['TypeScript', 'Tailwind CSS', 'Next.js'], github: 'https://github.com/nabilrakaiza/personal-website', live: 'https://nabilrakaiza.vercel.app/', accent: '#7b61ff', category: 'Fullstack' },
  { title: 'Discrete Event Simulator', description: 'Simulating discrete event in a shop settings.', tags: ['Java', 'OOP', 'Functional Programming'], github: 'https://github.com/nabilrakaiza/cs2030-discrete-event-simulator', accent: '#ffd700', category: 'Others' },
  { title: 'Heart Disease Statistical Report', description: 'Evaluated several machine learning models to predict heart disease.', tags: ['R', 'Machine Learning', 'Statistical Report'], github: 'https://github.com/nabilrakaiza/dsa1101-individual-project', accent: '#00d4ff', category: 'Machine Learning' },
  { title: 'Color Survey Result Analysis', description: 'Visualized insights from color survey result data.', tags: ['Python', 'Data Visualization', 'Matplotlib', 'Pandas', 'Seaborn'], github: 'https://github.com/nabilrakaiza/color-survey-results-analysis', accent: '#00ff9d', category: 'Data Analysis' },
];

const categories = ['All', 'Fullstack', 'Machine Learning', 'AI Systems', 'Data Analysis', 'Others'];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.category === active);

  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh' }}>
      <div className="gutter" style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        <ScrollReveal>
          <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-mint)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.75rem' }}>
            // projects
          </span>
          <h1 className="font-mono" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Things I&apos;ve Built
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '520px', marginBottom: '3rem' }}>
            A collection of projects ranging from open-source tools to production applications.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="font-mono"
                style={{
                  padding: '0.4rem 1rem', fontSize: '0.8rem', borderRadius: '4px', cursor: 'pointer',
                  border: `1px solid ${active === cat ? 'var(--accent-mint)' : 'var(--border)'}`,
                  background: active === cat ? 'rgba(0,255,157,0.1)' : 'var(--bg-card)',
                  color: active === cat ? 'var(--accent-mint)' : 'var(--text-muted)',
                  transition: 'all 0.2s',
                  letterSpacing: '0.05em',
                }}
              >
                {cat.toLowerCase()}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))', gap: '1.25rem' }}>
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <div
                style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: '10px', padding: '1.5rem', height: '100%',
                  display: 'flex', flexDirection: 'column', transition: 'all 0.25s ease',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = project.accent;
                  el.style.transform = 'translateY(-4px)';
                  el.style.boxShadow = `0 12px 32px ${project.accent}1a`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--border)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: project.accent, opacity: 0.6 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h3 className="font-mono" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: '3px', padding: '0.15rem 0.4rem' }}>
                    {project.category}
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, flex: 1, marginBottom: '1.25rem' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: '3px', padding: '0.2rem 0.5rem', background: 'var(--bg-surface)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {project.github && (
                    <a href={project.github} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.8rem', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
                    ><RiGithubLine size={15} /> Code</a>
                  )}
                  {project.live && (
                    <a href={project.live} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: project.accent }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.75'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                    ><RiExternalLinkLine size={15} /> Live</a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
