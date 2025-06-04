/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board || board.length === 0) return;

    // set variables
    const rows = board.length;
    const cols = board[0].length;

    // set up dfs function
    const dfs = (i, j) => {
        // check bounds 
        if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== 'O') return

        board[i][j] = "T" // temp mark
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    // mark all border connected 0's as "T"
    for (let i = 0; i < rows; i++) {
        dfs(i,0); // left border
        dfs(i,cols - 1) // right border
    }
    for (let j = 0; j < cols; j++) {
        dfs(0, j);          // top border
        dfs(rows - 1, j);   // bottom border 
    }
     
    // flip all remaining O -> X and T -> O
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === 'T') {
                board[i][j] = 'O';
            }
        }
    }
};