var isValidSudoku = function(board) {
    // Line 1-3: Create tracking arrays
    const rows = Array.from({length: 9}, () => new Set());
    const cols = Array.from({length: 9}, () => new Set());
    const boxes = Array.from({length: 9}, () => new Set());
    
    // Line 5-6: Nested loops to check every cell
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            // Line 7: Get current cell value
            const val = board[r][c];
            
            // Line 8-9: Skip empty cells
            if (val === '.') continue;

            // Line 11: Calculate which 3x3 box this cell belongs to
            const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // Line 13-17: Check for duplicates
            if (
                rows[r].has(val) ||
                cols[c].has(val) ||
                boxes[boxIdx].has(val)
            ) {
                return false; // Found duplicate - invalid!
            }

            // Line 22-24: Add current value to tracking sets
            rows[r].add(val);
            cols[c].add(val);
            boxes[boxIdx].add(val);
        }
    }
    
    // Line 28: If we made it here, sudoku is valid!
    return true;
};