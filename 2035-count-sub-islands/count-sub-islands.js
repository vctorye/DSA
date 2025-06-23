/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    const rows = grid1.length;
    const cols = grid1[0].length;

    const dfs = (r, c) => {
        // out of bounds or water
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid2[r][c] !== 1)
            return true;

        // mark visited
        grid2[r][c] = -1;

        // this cell is only valid if grid1 also has land here
        let isSub = grid1[r][c] === 1;

        // check all four directions
        let up = dfs(r - 1, c);
        let down = dfs(r + 1, c);
        let left = dfs(r, c - 1);
        let right = dfs(r, c + 1);

        return isSub && up && down && left && right;
    };

    let count = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid2[r][c] === 1) {
                // if full island is valid, count it
                if (dfs(r, c)) count++;
            }
        }
    }

    return count;
};