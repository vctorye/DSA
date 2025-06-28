/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    // createa isvalid function to check if the puzzle is valid
     function isValid(row, col, num) {
        const blockRow = Math.floor(row / 3) * 3;
        const blockCol = Math.floor(col / 3) * 3;
        const char = num.toString();

        for (let i = 0; i < 9; i++) {
            if (board[row][i] === char) return false;
            if (board[i][col] === char) return false;
            const r = blockRow + Math.floor(i / 3);
            const c = blockCol + i % 3;
            if (board[r][c] === char) return false;
        }
        return true;
    }

    // createa backtgrack funciton 
    function backtrack() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        if (isValid(row, col, num)) {
                            board[row][col] = num.toString();
                            if (backtrack()) return true;
                            board[row][col] = '.'; // backtrack
                        }
                    }
                    return false; // no valid number works here
                }
            }
        }
        return true; // all cells filled
    }

    backtrack();

};