/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (r,c) => {
        // check out of bounds if out then falsse
        if (r < 0 || r >= rows || c < 0 || c >= cols) return false;

        // if water or already visited then skip 
        if (grid[r][c] === 1) return true;

        // mark visited
        grid[r][c] = 1;
        
        const up = dfs(r - 1, c);
        const down =  dfs(r + 1, c);
        const left =  dfs(r, c - 1);
        const right =  dfs(r, c + 1);

        // return all directions 
        
        return up && down && left && right 
    }

    let count = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 0) {
                if (dfs(r,c)) count++
            } 
        }
    }
    return count
};