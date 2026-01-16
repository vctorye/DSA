/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0;
    let rows = board.length;
    let cols = board[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'X' && board[r][c - 1] !== 'X' && (!board[r - 1] || board[r - 1][c] !== 'X')) {
                 count++
            }
        }
    }
    return count
};