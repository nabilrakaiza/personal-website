/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { RiExternalLinkLine, RiGithubLine } from 'react-icons/ri';

const allProjects = [
  { title: 'Interruptible MLE Agent', description: 'A tree-search LLM agent for machine learning engineering that you can watch and steer while it runs. It streams progress to a Streamlit dashboard, pauses at safe points, and accepts structured human interventions (prune, redirect, inject knowledge, correct a stored finding), with a hidden probe split giving the human a signal the agent never optimises against. Over 118 four-hour runs on six MLE-bench Lite tasks plus live human sessions, all 63 text-task runs beat the leaderboard median for about $21 in total. No intervention beat the autonomous baseline (Friedman p = 0.55): the frozen evaluation harness had already removed most of the validation-test drift the interventions were built to catch. NUS DSA4213 project.', tags: ['Python', 'LLM Agents', 'MLE-bench', 'Streamlit', 'Docker', 'OpenRouter', 'AI'], github: 'https://github.com/nabilrakaiza/interruptible-mle-agent', accent: '#ff6b6b', category: 'AI Systems' },
  { title: 'Capacity-Aware Fraud Review System', description: 'Team project (6 people) for a fraud-review system that scores each payment with four components and a learned decision layer, then returns ACCEPT, REVIEW or BLOCK while keeping review admissions within analysts\' capacity of 70–80 cases a day. I owned the Short-Window Activity component, which flags a card group transacting far faster than its own usual pace. Its burst flag found fraud at 1.8× the base rate. Its separate training and inference routes gave identical outputs on all 1,500 test transactions, at 0.11 ms p99 latency. I also fixed its handling of out-of-order transactions from the live queue, which restored scoring for 18% of a batch.', tags: ['Python', 'Fraud Detection', 'Streaming', 'PostgreSQL', 'AWS', 'Model Monitoring', 'Machine Learning'], accent: '#00d4ff', category: 'Machine Learning' },
  { title: 'papertrail',description: 'Trained n-gram, RNN, LSTM and Transformer language models from scratch on WikiText-2 with one shared pipeline, comparing perplexity, training cost, inference speed and generation quality (test perplexity: Transformer 149.5, LSTM 210.8, Kneser-Ney trigram 226.0). An embedding ablation showed frozen self-trained skip-gram vectors cutting LSTM perplexity to 147.0, and a frozen-feature probe on AG News topic classification reached up to 85.6% accuracy (Transformer with frozen GloVe), against 62.9% for the baseline LSTM.', tags: ['Python', 'PyTorch', 'Language Models', 'LSTM', 'Transformer', 'Word2Vec', 'GloVe', 'NLP'], github: 'https://github.com/nabilrakaiza/papertrail', accent: '#00d4ff', category: 'Machine Learning' },
  { title: 'paperflash', description: 'A GPT-1-style decoder-only Transformer built from scratch (own BPE tokenizer, causal self-attention, training loop) to study how small transformers learn arithmetic. A one-layer model trained on (a + b) mod 113 memorised its training set, sat near 0% test accuracy for over 20,000 steps, then grokked to 100%. A Fourier analysis of its embeddings found 91% of the energy in just 3 of 56 frequencies, the circle-based algorithm Nanda et al. reverse-engineered.', tags: ['Python', 'PyTorch', 'Transformer', 'Interpretability', 'Grokking', 'NLP', 'AI'], github: 'https://github.com/nabilrakaiza/paperflash', accent: '#00d4ff', category: 'Machine Learning' },
  { title: 'social-sim-rag', description: 'A narrative dating sim where no dialogue is scripted. Each character answers from her own retrieved memory — static lore plus everything a playthrough generates — chunked, embedded and searched in pgvector. Hybrid retrieval (Postgres full-text fused with vector search by Reciprocal Rank Fusion) and a 23-case evaluation harness took MRR from 0.47 to 0.86 and greetings-that-need-no-memory from 0% correctly ignored to 100%.', tags: ['TypeScript', 'Next.js', 'RAG', 'pgvector', 'Supabase', 'Gemini', 'AI'], github: 'https://github.com/nabilrakaiza/socialsim-rag', live: '/playground/socialsim', accent: '#ff6b6b', category: 'AI Systems' },
  { title: 'Indo-English Translation Machine', description: 'A mini Indonesian-English translation machine built from scratch.', tags: ['Python', 'PyTorch', 'Transformer', 'BPE Tokenizer', 'NLP', 'AI'], github: 'https://github.com/nabilrakaiza/id-en-translator', live: '/playground/id-en-translator', accent: '#ff6b6b', category: 'AI Systems' },
  { title: 'Fairy Chess Machine', description: 'Implementation of minimax + alpha-beta pruning to play fairy chess.', tags: ['Algorithm', 'Classical AI', 'Adversarial Search', 'AI'], live: '/playground/fairy-chess-machine', accent: '#ff6b6b', category: 'AI Systems' },
  { title: 'GrindHub', description: 'Built and optimized a full-stack, cross-platform React Native app with a Node.js/PostgreSQL REST API and a Flask-powered AI chatbot for seamless task management and study tracking.', tags: ['JavaScript', 'Node.js', 'PostgreSQL', 'Figma', 'Railway', 'Python', 'LangChain', 'Gemini'], github: 'https://github.com/zayyankece/GrindHub', accent: '#7b61ff', category: 'Fullstack' },
  { title: 'Papper', description: 'Built a cross-platform, multi-role React Native POS system with Supabase and PostgreSQL that automates stock deduction, dual-printer Bluetooth printing, and analytics, actively processing 50+ daily orders and reducing SaaS costs by 100%.', tags: ['React', 'React Native', 'TypeScript', 'PostgreSQL', 'Supabase', 'Expo', 'Tailwind CSS'], github: 'https://github.com/nabilrakaiza/Papper', accent: '#7b61ff', category: 'Fullstack' },
  { title: 'Automatic Survey Analyzer', description: 'Built an end-to-end automated Python pipeline utilizing XGBoost, SHAP, and DBSCAN to analyze survey drop-offs and automate respondent profiling, delivering actionable insights for survey optimization.', tags: ['Python', 'Pandas', 'sklearn', 'Gemini', 'Streamlit'], github: 'https://github.com/nabilrakaiza/automatic-survey-analyzer', accent: '#ff6b6b', category: 'AI Systems' },
  { title: 'Monitoring Human Mobility with Smartphones', description: 'Utilizing several traditional and modern ML framework to solve this problem.', tags: ['Python', 'sklearn', 'Pandas', 'PyTorch', 'Machine Learning'], github: 'https://github.com/nabilrakaiza/human-activity-recognition', accent: '#00d4ff', category: 'Machine Learning' },
  { title: 'Oil Temperature Transformers Time Series Prediction', description: 'Developed and evaluated 12+ machine learning and deep learning models for time-series temperature prediction, leveraging rigorous data cleaning, feature engineering, and anomaly detection to optimize model robustness.', tags: ['Python', 'sklearn', 'Pandas', 'numpy'], github: 'https://github.com/nabilrakaiza/it1244-project', accent: '#00d4ff', category: 'Machine Learning' },
  { title: 'HDB Resale Price Regression Analysis', description: 'Built an interpretable linear regression model for Singapore HDB resale prices, geocoding addresses via the OneMap API to engineer proximity features, then resolving multicollinearity and heteroscedasticity through respecification and log transformation to reach an adjusted R² of 0.895.', tags: ['Python', 'statsmodels', 'Pandas', 'OneMap API'], github: 'https://github.com/nabilrakaiza/hdb-resale-price', accent: '#00d4ff', category: 'Machine Learning' },  
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
