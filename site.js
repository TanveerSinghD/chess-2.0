// Guided opening preview, using the same piece artwork as the iPhone app.
const opening = [
  { title: 'A fresh start.', description: 'All the pieces are in place. White makes the first move.' },
  { from: 'e2', to: 'e4', notation: '1. e4', title: 'Take a little space.', description: 'White advances the king’s pawn, opening lines for the bishop and queen.' },
  { from: 'e7', to: 'e5', notation: '1. … e5', title: 'Meet in the middle.', description: 'Black answers with a central pawn of its own. A balanced beginning.' },
  { from: 'g1', to: 'f3', notation: '2. Nf3', title: 'Bring a knight into play.', description: 'White develops a knight and puts pressure on Black’s e5 pawn.' },
  { from: 'b8', to: 'c6', notation: '2. … Nc6', title: 'A little support.', description: 'Black develops a knight, defending the pawn and watching the centre.' },
  { from: 'f1', to: 'b5', notation: '3. Bb5', title: 'The Spanish opening.', description: 'The bishop takes aim at the knight. This position is known as the Ruy López.' },
  { from: 'a7', to: 'a6', notation: '3. … a6', title: 'Your next decision.', description: 'Black challenges the bishop. Retreat or exchange? The next idea is White’s.' }
];
const files = 'abcdefgh';
const pieceNames = { r: 'rook', n: 'knight', b: 'bishop', q: 'queen', k: 'king', p: 'pawn' };
function positionAt(step) {
  const position = {};
  const backRank = 'rnbqkbnr';
  for (let i = 0; i < 8; i++) {
    position[files[i] + '1'] = 'w' + backRank[i];
    position[files[i] + '2'] = 'wp';
    position[files[i] + '7'] = 'bp';
    position[files[i] + '8'] = 'b' + backRank[i];
  }
  for (let i = 1; i <= step; i++) {
    const move = opening[i];
    position[move.to] = position[move.from];
    delete position[move.from];
  }
  return position;
}
function renderBoard(element, step, highlight = false) {
  const position = positionAt(step);
  const move = opening[step];
  const fragment = document.createDocumentFragment();
  const descriptions = [];
  for (let rank = 8; rank >= 1; rank--) {
    for (let file = 0; file < 8; file++) {
      const square = files[file] + rank;
      const cell = document.createElement('div');
      cell.className = 'square' + ((rank + file) % 2 === 0 ? ' pink' : '');
      if (highlight && (square === move.from || square === move.to)) cell.classList.add('last-move');
      if (highlight && square === move.to) cell.classList.add('destination');
      const piece = position[square];
      if (piece) {
        const img = document.createElement('img');
        img.src = 'assets/' + piece + '.png';
        img.alt = '';
        img.width = 128;
        img.height = 128;
        cell.append(img);
        descriptions.push((piece[0] === 'w' ? 'White ' : 'Black ') + pieceNames[piece[1]] + ' on ' + square);
      }
      fragment.append(cell);
    }
  }
  element.replaceChildren(fragment);
  if (element.id === 'demo-board') element.setAttribute('aria-label', 'Board after ' + (move.notation || 'setup') + '. ' + descriptions.join(', ') + '.');
}
renderBoard(document.getElementById('hero-board'), 4);
let step = 0;
const board = document.getElementById('demo-board');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
function updatePreview() {
  renderBoard(board, step, true);
  document.getElementById('move-number').textContent = String(step).padStart(2, '0');
  document.getElementById('move-title').textContent = opening[step].title;
  document.getElementById('move-description').textContent = opening[step].description;
  document.getElementById('move-progress').textContent = 'Move ' + step + ' of ' + (opening.length - 1) + (step ? ' · ' + opening[step].notation : '');
  document.getElementById('turn-label').textContent = step % 2 ? 'Black to move' : 'White to move';
  previous.disabled = step === 0;
  next.disabled = step === opening.length - 1;
}
previous.addEventListener('click', () => { if (step > 0) { step--; updatePreview(); } });
next.addEventListener('click', () => { if (step < opening.length - 1) { step++; updatePreview(); } });
document.getElementById('reset').addEventListener('click', () => { step = 0; updatePreview(); });
updatePreview();
