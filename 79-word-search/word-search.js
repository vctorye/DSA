/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // set variables 
    const rows = board.length, cols = board[0].length;

    // dfs function
    const dfs = (r, c, i) => {
        // chcek bounds
        if (r < 0 || r >= rows || c < 0 ||c >= cols || board[r][c] !== word[i]) return false;

        // check if string is met
        if (i === word.length - 1) return true;
        let temp =  board[r][c]
        board[r][c] = '#'
        // check next direction
        const found = 
            dfs(r + 1, c, i + 1)||
            dfs(r - 1, c, i + 1)||
            dfs(r, c + 1, i + 1)||
            dfs(r, c - 1, i + 1);
        board[r][c] = temp
        return  found
    }

    // iterate through board 
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === word[0]) {
                if (dfs(r,c, 0)) return true; 
            }
        }
    }

    return false;
};