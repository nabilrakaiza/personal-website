// ─── Types ───────────────────────────────────────────────────────────────────
export type Color = 'white' | 'black';
export type PieceType = 'King' | 'Rook' | 'Bishop' | 'Knight' | 'Squire' | 'Combatant';
export type Pos = [number, number];
export type Piece = { type: PieceType; color: Color; pos: Pos };
export type Move = { from: Pos; to: Pos };
export type Board = (Piece | null)[][];

// ─── Constants ───────────────────────────────────────────────────────────────
export const PIECE_VALUES: Record<PieceType, number> = {
  King: 1000,
  Rook: 5,
  Bishop: 3,
  Knight: 3,
  Squire: 4,
  Combatant: 1,
};

export const PIECE_SYMBOLS: Record<PieceType, Record<Color, string>> = {
  King:      { white: '♔', black: '♚' },
  Rook:      { white: '♖', black: '♜' },
  Bishop:    { white: '♗', black: '♝' },
  Knight:    { white: '♘', black: '♞' },
  Squire:    { white: '★', black: '★' },
  Combatant: { white: '♙', black: '♟' },
};

// ─── Starting Position ───────────────────────────────────────────────────────
export function createInitialPieces(): Piece[] {
  const pieces: Piece[] = [];

  // Back rank layout: Rook, Knight, Bishop, Squire, King, Bishop, Knight, Rook
  const backRank: PieceType[] = ['Rook', 'Knight', 'Bishop', 'Squire', 'King', 'Bishop', 'Knight', 'Rook'];

  for (let col = 0; col < 8; col++) {
    pieces.push({ type: backRank[col], color: 'black', pos: [0, col] });
    pieces.push({ type: 'Combatant',   color: 'black', pos: [1, col] });
    pieces.push({ type: 'Combatant',   color: 'white', pos: [6, col] });
    pieces.push({ type: backRank[col], color: 'white', pos: [7, col] });
  }

  return pieces;
}

// ─── Board Utilities ─────────────────────────────────────────────────────────
export function piecesToBoard(pieces: Piece[]): Board {
  const board: Board = Array.from({ length: 8 }, () => Array(8).fill(null));
  for (const p of pieces) board[p.pos[0]][p.pos[1]] = p;
  return board;
}

function inBounds(r: number, c: number) {
  return r >= 0 && r < 8 && c >= 0 && c < 8;
}

// ─── Move Generation ─────────────────────────────────────────────────────────
export function generateMoves(pieces: Piece[], color: Color): Move[] {
  const board = piecesToBoard(pieces);
  const opponent: Color = color === 'white' ? 'black' : 'white';
  const moves: Move[] = [];

  const isFriendly = (r: number, c: number) => board[r][c]?.color === color;
  const isEnemy    = (r: number, c: number) => board[r][c]?.color === opponent;

  const slide = (from: Pos, dr: number, dc: number) => {
    let [r, c] = from;
    while (true) {
      r += dr; c += dc;
      if (!inBounds(r, c) || isFriendly(r, c)) break;
      moves.push({ from, to: [r, c] });
      if (isEnemy(r, c)) break;
    }
  };

  const jump = (from: Pos, dirs: [number, number][]) => {
    for (const [dr, dc] of dirs) {
      const r = from[0] + dr, c = from[1] + dc;
      if (inBounds(r, c) && !isFriendly(r, c)) moves.push({ from, to: [r, c] });
    }
  };

  for (const piece of pieces) {
    if (piece.color !== color) continue;
    const { type, pos } = piece;

    if (type === 'King') {
      jump(pos, [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]);
    } else if (type === 'Rook') {
      for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]] as [number,number][]) slide(pos, dr, dc);
    } else if (type === 'Bishop') {
      for (const [dr, dc] of [[-1,-1],[-1,1],[1,-1],[1,1]] as [number,number][]) slide(pos, dr, dc);
    } else if (type === 'Knight') {
      jump(pos, [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]);
    } else if (type === 'Squire') {
      // Manhattan distance 2 jumps
      jump(pos, [[2,0],[-2,0],[0,2],[0,-2],[1,1],[1,-1],[-1,1],[-1,-1]]);
    } else if (type === 'Combatant') {
      // Move orthogonally (no capture)
      for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]] as [number,number][]) {
        const r = pos[0] + dr, c = pos[1] + dc;
        if (inBounds(r, c) && board[r][c] === null) moves.push({ from: pos, to: [r, c] });
      }
      // Capture diagonally
      for (const [dr, dc] of [[-1,-1],[-1,1],[1,-1],[1,1]] as [number,number][]) {
        const r = pos[0] + dr, c = pos[1] + dc;
        if (inBounds(r, c) && isEnemy(r, c)) moves.push({ from: pos, to: [r, c] });
      }
    }
  }

  return moves;
}

// ─── Apply Move ──────────────────────────────────────────────────────────────
export function applyMove(pieces: Piece[], move: Move): Piece[] {
  const next = pieces
    .filter(p => !(p.pos[0] === move.to[0] && p.pos[1] === move.to[1]))  // remove captured
    .map(p =>
      p.pos[0] === move.from[0] && p.pos[1] === move.from[1]
        ? { ...p, pos: move.to }
        : p
    );
  return next;
}

// ─── Heuristic ───────────────────────────────────────────────────────────────
function centralityBonus(pos: Pos): number {
  const [r, c] = pos;
  const dr = Math.abs(r - 3.5);
  const dc = Math.abs(c - 3.5);
  const dist = Math.max(dr, dc); // 0–3.5
  return 1 + (3.5 - dist) * 0.06; // 1.0 – 1.21
}

function cornerBonus(pos: Pos): number {
  const [r, c] = pos;
  const cornerDist = Math.min(
    Math.hypot(r, c),
    Math.hypot(r, c - 7),
    Math.hypot(r - 7, c),
    Math.hypot(r - 7, c - 7)
  );
  return 1 + (7 - cornerDist) * 0.04; // closer to corner = higher
}

function evaluate(pieces: Piece[]): number {
  let score = 0;
  for (const p of pieces) {
    const base = PIECE_VALUES[p.type];
    const mult = p.type === 'King' ? cornerBonus(p.pos) : centralityBonus(p.pos);
    const val = base * mult;
    score += p.color === 'white' ? val : -val;
  }
  return score;
}

// ─── Terminal Check ───────────────────────────────────────────────────────────
function terminalEval(pieces: Piece[]): number | null {
  const whiteKing = pieces.some(p => p.type === 'King' && p.color === 'white');
  const blackKing = pieces.some(p => p.type === 'King' && p.color === 'black');
  if (!whiteKing) return -Infinity;
  if (!blackKing) return Infinity;
  const types = new Set(pieces.map(p => p.type));
  if (types.size === 1 && types.has('King')) return 0;
  return null;
}

// ─── Minimax + Alpha-Beta ────────────────────────────────────────────────────
export function minimax(
  pieces: Piece[],
  depth: number,
  alpha: number,
  beta: number,
  toMove: Color
): { score: number; move: Move | null } {
  const terminal = terminalEval(pieces);
  if (terminal !== null) return { score: terminal, move: null };
  if (depth === 0) return { score: evaluate(pieces), move: null };

  const moves = generateMoves(pieces, toMove);
  // Move ordering: captures first
  moves.sort((a, b) => {
    const board = piecesToBoard(pieces);
    const aCapture = board[a.to[0]][a.to[1]] !== null ? 1 : 0;
    const bCapture = board[b.to[0]][b.to[1]] !== null ? 1 : 0;
    return bCapture - aCapture;
  });

  const next: Color = toMove === 'white' ? 'black' : 'white';
  let bestMove: Move | null = null;

  if (toMove === 'white') {
    let best = -Infinity;
    for (const move of moves) {
      const next_pieces = applyMove(pieces, move);
      const { score } = minimax(next_pieces, depth - 1, alpha, beta, next);
      if (score > best) { best = score; bestMove = move; }
      alpha = Math.max(alpha, score);
      if (beta <= alpha) break;
    }
    return { score: best, move: bestMove };
  } else {
    let best = Infinity;
    for (const move of moves) {
      const next_pieces = applyMove(pieces, move);
      const { score } = minimax(next_pieces, depth - 1, alpha, beta, next);
      if (score < best) { best = score; bestMove = move; }
      beta = Math.min(beta, score);
      if (beta <= alpha) break;
    }
    return { score: best, move: bestMove };
  }
}
