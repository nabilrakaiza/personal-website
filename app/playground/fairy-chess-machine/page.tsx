/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowLeftLine, RiRefreshLine, RiSettings3Line } from 'react-icons/ri';
import {
  createInitialPieces, generateMoves, applyMove, piecesToBoard,
  minimax, PIECE_SYMBOLS, PIECE_VALUES,
  type Piece, type Move, type Color, type Pos,
} from './engine';

type GameStatus = 'setup' | 'playing' | 'gameover';

const FILE_LABELS = ['a','b','c','d','e','f','g','h'];

function posEq(a: Pos, b: Pos) { return a[0] === b[0] && a[1] === b[1]; }

export default function FairyChessPage() {
  const [status, setStatus]           = useState<GameStatus>('setup');
  const [humanColor, setHumanColor]   = useState<Color>('white');
  const [depth, setDepth]             = useState(5);
  const [pieces, setPieces]           = useState<Piece[]>([]);
  const [toMove, setToMove]           = useState<Color>('white');
  const [selected, setSelected]       = useState<Pos | null>(null);
  const [legalMoves, setLegalMoves]   = useState<Move[]>([]);
  const [highlighted, setHighlighted] = useState<Pos[]>([]);
  const [lastMove, setLastMove]       = useState<Move | null>(null);
  const [thinking, setThinking]       = useState(false);
  const [winner, setWinner]           = useState<Color | 'draw' | null>(null);
  const [moveLog, setMoveLog]         = useState<string[]>([]);
  const [captured, setCaptured]       = useState<{ white: Piece[]; black: Piece[] }>({ white: [], black: [] });
  const [showDepthMenu, setShowDepthMenu] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);

  // scroll move log
  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [moveLog]);

  const checkGameOver = useCallback((ps: Piece[]) => {
    const wk = ps.some(p => p.type === 'King' && p.color === 'white');
    const bk = ps.some(p => p.type === 'King' && p.color === 'black');
    if (!wk) return 'black';
    if (!bk) return 'white';
    const types = new Set(ps.map(p => p.type));
    if (types.size === 1) return 'draw';
    return null;
  }, []);

  const doEngineMove = useCallback((ps: Piece[], engineColor: Color, d: number) => {
    setThinking(true);
    setTimeout(() => {
      const { move } = minimax(ps, d, -Infinity, Infinity, engineColor);
      if (!move) { setThinking(false); return; }

      const board = piecesToBoard(ps);
      const capturedPiece = board[move.to[0]][move.to[1]];
      const newPieces = applyMove(ps, move);

      if (capturedPiece) {
        setCaptured(prev => ({
          ...prev,
          [humanColor]: [...prev[humanColor as keyof typeof prev], capturedPiece],
        }));
      }

      setLastMove(move);
      setPieces(newPieces);

      const from = `${FILE_LABELS[move.from[1]]}${8 - move.from[0]}`;
      const to   = `${FILE_LABELS[move.to[1]]}${8 - move.to[0]}`;
      const movingPiece = ps.find(p => posEq(p.pos, move.from));
      setMoveLog(prev => [...prev, `${engineColor === 'white' ? '⬜' : '⬛'} ${movingPiece?.type} ${from}→${to}${capturedPiece ? ' ✕' : ''}`]);

      const result = checkGameOver(newPieces);
      if (result) { setWinner(result); setStatus('gameover'); }
      else { setToMove(humanColor); }
      setThinking(false);
    }, 50);
  }, [humanColor, checkGameOver]);

  // Engine moves when it's the engine's turn
  useEffect(() => {
    if (status !== 'playing' || thinking) return;
    if (toMove !== humanColor) {
      const engineColor: Color = humanColor === 'white' ? 'black' : 'white';
      setTimeout(() => doEngineMove(pieces, engineColor, depth), 0);
    }
  }, [toMove, status, pieces, humanColor, depth, thinking, doEngineMove]);

  const startGame = () => {
    const initial = createInitialPieces();
    setPieces(initial);
    setToMove('white');
    setSelected(null);
    setHighlighted([]);
    setLastMove(null);
    setWinner(null);
    setMoveLog([]);
    setCaptured({ white: [], black: [] });
    setStatus('playing');
    setLegalMoves(generateMoves(initial, 'white'));
  };

  const handleSquareClick = (row: number, col: number) => {
    if (status !== 'playing' || thinking || toMove !== humanColor) return;
    const clickedPos: Pos = [row, col];
    const board = piecesToBoard(pieces);
    const clickedPiece = board[row][col];

    // If a piece is already selected
    if (selected) {
      const move = highlighted.find(p => posEq(p, clickedPos));
      if (move) {
        // Execute human move
        const capturedPiece = board[row][col];
        const newPieces = applyMove(pieces, { from: selected, to: clickedPos });

        if (capturedPiece) {
          const engineColor: Color = humanColor === 'white' ? 'black' : 'white';
          setCaptured(prev => ({
            ...prev,
            [engineColor]: [...prev[engineColor as keyof typeof prev], capturedPiece],
          }));
        }

        const from = `${FILE_LABELS[selected[1]]}${8 - selected[0]}`;
        const to   = `${FILE_LABELS[col]}${8 - row}`;
        const movingPiece = pieces.find(p => posEq(p.pos, selected));
        setMoveLog(prev => [...prev, `${humanColor === 'white' ? '⬜' : '⬛'} ${movingPiece?.type} ${from}→${to}${capturedPiece ? ' ✕' : ''}`]);

        setLastMove({ from: selected, to: clickedPos });
        setPieces(newPieces);
        setSelected(null);
        setHighlighted([]);

        const result = checkGameOver(newPieces);
        if (result) { setWinner(result); setStatus('gameover'); return; }

        const engineColor: Color = humanColor === 'white' ? 'black' : 'white';
        setToMove(engineColor);
        return;
      }

      // Clicked same piece — deselect
      if (clickedPiece?.color === humanColor && posEq(clickedPiece.pos, selected)) {
        setSelected(null);
        setHighlighted([]);
        return;
      }
    }

    // Select a piece
    if (clickedPiece?.color === humanColor) {
      const moves = legalMoves.filter(m => posEq(m.from, clickedPos));
      setSelected(clickedPos);
      setHighlighted(moves.map(m => m.to));
    } else {
      setSelected(null);
      setHighlighted([]);
    }
  };

  // Recompute legal moves on each turn
  useEffect(() => {
    if (status === 'playing') {
      setTimeout(() => setLegalMoves(generateMoves(pieces, humanColor)), 0);
    }
  }, [pieces, humanColor, status]);

  const board = piecesToBoard(pieces);

  // flip board if human plays black
  const displayRows = humanColor === 'white' ? [0,1,2,3,4,5,6,7] : [7,6,5,4,3,2,1,0];
  const displayCols = humanColor === 'white' ? [0,1,2,3,4,5,6,7] : [7,6,5,4,3,2,1,0];

  const SQUARE = 64;
  const BOARD_SIZE = SQUARE * 8;

  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>

        {/* Back */}
        <Link href="/playground" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '2rem', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
        >
          <RiArrowLeftLine size={14} /> Back to Playground
        </Link>

        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-violet)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>// playground</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <h1 className="font-mono" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
              Fairy Chess Engine
            </h1>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '700px', lineHeight: 1.7 }}>
            Minimax + Alpha-Beta Pruning engine built for CS3243 Project 3. Features two fairy pieces: <strong style={{ color: 'var(--text-primary)' }}>Squire (★)</strong> — Manhattan distance 2 jumps, and <strong style={{ color: 'var(--text-primary)' }}>Combatant (♙/♟)</strong> — moves orthogonally, captures diagonally.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
            {['Classical AI', 'Adversarial Search', 'Algorithm', 'AI'].map(tag => (
              <span key={tag} className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--accent-violet)', border: '1px solid rgba(123,97,255,0.3)', borderRadius: '3px', padding: '0.2rem 0.5rem', background: 'rgba(123,97,255,0.08)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Setup Screen */}
        <AnimatePresence>
          {status === 'setup' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2.5rem', maxWidth: '480px' }}>
                <h2 className="font-mono" style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>// game_setup</h2>

                <div style={{ marginBottom: '1.75rem' }}>
                  <label className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.75rem' }}>PLAY AS</label>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {(['white', 'black'] as Color[]).map(c => (
                      <button key={c} onClick={() => setHumanColor(c)} className="font-mono" style={{
                        flex: 1, padding: '0.75rem',
                        background: humanColor === c ? (c === 'white' ? 'rgba(0,255,157,0.1)' : 'rgba(123,97,255,0.1)') : 'var(--bg-surface)',
                        border: `1px solid ${humanColor === c ? (c === 'white' ? 'var(--accent-mint)' : 'var(--accent-violet)') : 'var(--border)'}`,
                        borderRadius: '6px', color: humanColor === c ? (c === 'white' ? 'var(--accent-mint)' : 'var(--accent-violet)') : 'var(--text-muted)',
                        cursor: 'pointer', fontSize: '0.85rem', transition: 'all 0.2s',
                      }}>
                        {c === 'white' ? '⬜' : '⬛'} {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.75rem' }}>
                    ENGINE DEPTH: <span style={{ color: 'var(--accent-mint)' }}>{depth}</span>
                    <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                      {depth <= 3 ? '(easy)' : depth <= 5 ? '(medium)' : '(hard)'}
                    </span>
                  </label>
                  <input type="range" min={1} max={7} value={depth} onChange={e => setDepth(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-mint)', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                    {[1,2,3,4,5,6,7].map(d => (
                      <span key={d} className="font-mono" style={{ fontSize: '0.65rem', color: d === depth ? 'var(--accent-mint)' : 'var(--text-muted)' }}>{d}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    Depth 7 may take a few seconds on complex positions.
                  </p>
                </div>

                {/* Piece legend */}
                <div style={{ marginBottom: '2rem', padding: '1rem', background: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>PIECES</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                    {([['King','♔','1000'],['Rook','♖','5'],['Bishop','♗','3'],['Knight','♘','3'],['Squire','★','4'],['Combatant','♙','1']] as [string,string,string][]).map(([name, sym, val]) => (
                      <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)', width: '20px', textAlign: 'center' }}>{sym}</span>
                        <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{name} <span style={{ color: 'var(--accent-violet)' }}>({val})</span></span>
                      </div>
                    ))}
                  </div>
                </div>

                <button onClick={startGame} className="font-mono" style={{
                  width: '100%', padding: '0.9rem', background: 'var(--accent-mint)',
                  color: 'var(--bg-primary)', border: 'none', borderRadius: '6px',
                  fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(0,255,157,0.3)', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                >
                  Start Game →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Game Screen */}
        {(status === 'playing' || status === 'gameover') && (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>

            {/* Board */}
            <div style={{ position: 'relative' }}>
              {/* Game over overlay */}
              <AnimatePresence>
                {status === 'gameover' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      position: 'absolute', inset: 0, zIndex: 10,
                      background: 'rgba(10,10,15,0.88)', backdropFilter: 'blur(4px)',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      borderRadius: '4px',
                    }}
                  >
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                      <h2 className="font-mono" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: winner === humanColor ? 'var(--accent-mint)' : winner === 'draw' ? 'var(--text-primary)' : '#ff6b6b' }}>
                        {winner === 'draw' ? 'Draw!' : winner === humanColor ? 'You win!' : 'Engine wins!'}
                      </h2>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                        {winner === 'draw' ? 'Only kings remain.' : `${winner === humanColor ? 'You captured' : 'Engine captured'} the ${winner === humanColor ? 'black' : 'white'} King.`}
                      </p>
                      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                        <button onClick={startGame} className="font-mono" style={{
                          padding: '0.6rem 1.25rem', background: 'var(--accent-mint)', color: 'var(--bg-primary)',
                          border: 'none', borderRadius: '4px', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer',
                        }}>
                          Play Again
                        </button>
                        <button onClick={() => setStatus('setup')} className="font-mono" style={{
                          padding: '0.6rem 1.25rem', background: 'transparent', color: 'var(--text-muted)',
                          border: '1px solid var(--border)', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer',
                        }}>
                          Change Settings
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Rank labels left */}
              <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', paddingRight: '6px', height: `${BOARD_SIZE}px` }}>
                  {displayRows.map(row => (
                    <span key={row} className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', width: '12px', textAlign: 'center' }}>
                      {8 - row}
                    </span>
                  ))}
                </div>

                {/* Board squares */}
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(8, ${SQUARE}px)`, border: '1px solid var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                  {displayRows.map(row =>
                    displayCols.map(col => {
                      const isLight = (row + col) % 2 === 0;
                      const piece = board[row][col];
                      const isSelected = selected && posEq(selected, [row, col]);
                      const isHighlighted = highlighted.some(p => posEq(p, [row, col]));
                      const isLastFrom = lastMove && posEq(lastMove.from, [row, col]);
                      const isLastTo   = lastMove && posEq(lastMove.to,   [row, col]);
                      const isEnemy = piece && piece.color !== humanColor;

                      let bg = isLight ? '#b58863' : '#6d4c33';
                      if (isSelected)            bg = '#7b61ff88';
                      else if (isLastFrom || isLastTo) bg = isLight ? '#cdd16f' : '#aaa23a';

                      return (
                        <div
                          key={`${row}-${col}`}
                          onClick={() => handleSquareClick(row, col)}
                          style={{
                            width: `${SQUARE}px`, height: `${SQUARE}px`,
                            background: bg,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: (piece?.color === humanColor || isHighlighted) ? 'pointer' : 'default',
                            position: 'relative',
                            transition: 'background 0.1s',
                          }}
                        >
                          {/* Highlight dot or capture ring */}
                          {isHighlighted && !piece && (
                            <div style={{ position: 'absolute', width: '28%', height: '28%', borderRadius: '50%', background: 'rgba(0,255,157,0.55)', pointerEvents: 'none' }} />
                          )}
                          {isHighlighted && piece && (
                            <div style={{ position: 'absolute', inset: '3px', borderRadius: '2px', border: '3px solid rgba(0,255,157,0.7)', pointerEvents: 'none' }} />
                          )}

                          {/* Piece */}
                          {piece && (
                            <span style={{
                              fontSize: piece.type === 'Squire' ? '1.5rem' : '1.8rem',
                              lineHeight: 1,
                              color: piece.color === 'white' ? '#fff' : '#1a1a1a',
                              textShadow: piece.color === 'white'
                                ? '0 1px 3px rgba(0,0,0,0.8)'
                                : '0 1px 2px rgba(255,255,255,0.3)',
                              userSelect: 'none',
                              filter: isEnemy && isHighlighted ? 'drop-shadow(0 0 6px rgba(0,255,157,0.8))' : 'none',
                              transition: 'filter 0.2s',
                            }}>
                              {PIECE_SYMBOLS[piece.type][piece.color]}
                            </span>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* File labels bottom */}
              <div style={{ display: 'flex', paddingLeft: '18px', marginTop: '4px' }}>
                {displayCols.map(col => (
                  <span key={col} className="font-mono" style={{ width: `${SQUARE}px`, textAlign: 'center', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                    {FILE_LABELS[col]}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ flex: 1, minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

              {/* Status */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>STATUS</span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => setShowDepthMenu(!showDepthMenu)} title="Change depth" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 0 }}>
                      <RiSettings3Line size={15} />
                    </button>
                    <button onClick={startGame} title="New game" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 0 }}>
                      <RiRefreshLine size={15} />
                    </button>
                  </div>
                </div>

                {showDepthMenu && (
                  <div style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'var(--bg-surface)', borderRadius: '6px' }}>
                    <label className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                      DEPTH: <span style={{ color: 'var(--accent-mint)' }}>{depth}</span>
                    </label>
                    <input type="range" min={1} max={7} value={depth} onChange={e => setDepth(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--accent-mint)', cursor: 'pointer' }}
                    />
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  {thinking ? (
                    <>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-violet)', animation: 'pulse 1s infinite' }} />
                      <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-violet)' }}>Engine thinking...</span>
                    </>
                  ) : toMove === humanColor ? (
                    <>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-mint)', boxShadow: '0 0 6px var(--accent-mint)' }} />
                      <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-mint)' }}>Your turn</span>
                    </>
                  ) : (
                    <>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text-muted)' }} />
                      <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Engine&apos;s turn</span>
                    </>
                  )}
                </div>

                <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                  <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>You: <span style={{ color: humanColor === 'white' ? '#fff' : 'var(--accent-violet)' }}>{humanColor}</span></span>
                  <span style={{ color: 'var(--border)' }}>·</span>
                  <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Depth: <span style={{ color: 'var(--accent-mint)' }}>{depth}</span></span>
                </div>
              </div>

              {/* Captured pieces */}
              {(captured.white.length > 0 || captured.black.length > 0) && (
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem' }}>
                  <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.6rem' }}>CAPTURED</span>
                  {(['white','black'] as Color[]).map(c => {
                    const caps = c === 'white' ? captured.white : captured.black;
                    if (caps.length === 0) return null;
                    const material = caps.reduce((s, p) => s + PIECE_VALUES[p.type], 0);
                    return (
                      <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', minWidth: '32px' }}>+{material}</span>
                        {caps.map((p, i) => (
                          <span key={i} style={{ fontSize: '1rem', color: c === 'white' ? '#fff' : '#1a1a2e', textShadow: c === 'white' ? '0 0 4px rgba(0,0,0,0.8)' : 'none' }}>
                            {PIECE_SYMBOLS[p.type][p.color]}
                          </span>
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Move log */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem', flex: 1 }}>
                <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.6rem' }}>MOVE LOG</span>
                <div ref={logRef} style={{ maxHeight: '280px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {moveLog.length === 0 ? (
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>No moves yet</span>
                  ) : moveLog.map((log, i) => (
                    <div key={i} className="font-mono" style={{ fontSize: '0.72rem', color: i % 2 === 0 ? 'var(--text-primary)' : 'var(--text-muted)', padding: '0.15rem 0' }}>
                      <span style={{ color: 'var(--text-muted)', marginRight: '0.4rem' }}>{Math.floor(i/2)+1}{i%2===0?'.':'...'}</span>
                      {log.replace(/^[⬜⬛]\s/, '')}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        input[type=range] { height: 4px; }
        @media (max-width: 768px) {
          div[style*="display: flex; gap: 2rem"] { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
