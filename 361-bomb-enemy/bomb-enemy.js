/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) return 0;

    const m = grid.length, n = grid[0].length;
    let max = 0;

    let rowHits = 0;
    let colHits = Array(n).fill(0);

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (c === 0 || grid[r][c- 1] === 'W') {
                rowHits = 0;
                for (let j = c; j < n && grid[r][j] !== 'W'; j++) {
                    if (grid[r][j] === 'E') rowHits++
                }
            }

            if (r === 0 || grid[r - 1][c] === 'W') {
                colHits[c] = 0;
                for (let i = r; i < m && grid[i][c] !== 'W'; i++) {
                    if (grid[i][c] === 'E') colHits[c]++
                }
            }

            if (grid[r][c] === '0') {
                max = Math.max(max, rowHits + colHits[c]);
            }
        }
    }

    return max 
};