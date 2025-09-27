/**
 * @param {character[][]} board
 * @return {number}
 */
// count battleships by only counting each ship's "first" cell:
// a cell 'X' is the start of a ship iff there is no 'X' directly above it
// and no 'X' directly to its left.
var countBattleships = function(board) {
  let rows = board.length;
  if (rows === 0) return 0;
  let cols = board[0].length;

  let count = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // skip water
      if (board[r][c] !== 'X') continue;

      // if there's an 'X' above, this cell is a continuation of a vertical ship
      if (r > 0 && board[r - 1][c] === 'X') continue;

      // if there's an 'X' to the left, this cell is a continuation of a horizontal ship
      if (c > 0 && board[r][c - 1] === 'X') continue;

      // otherwise this cell is the top-left start of a ship
      count++;
    }
  }

  return count;
};
