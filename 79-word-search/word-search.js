/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length, cols = board[0].length;

    const dfs = (r, c, i) => {

        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[i]) {
            return false
        }

        if (i === word.length - 1) return true;

        const temp = board[r][c];
        board[r][c] = "#"
        const found = 
        dfs (r + 1, c, i + 1) ||
        dfs (r - 1, c, i + 1) || 
        dfs (r, c + 1, i + 1) ||
        dfs (r, c - 1, i + 1)

        board[r][c] = temp;
        return found
    }


    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0]) {
                if (dfs(i, j, 0)) return true
            }
        }
    }

    return false
};