/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let rows = grid.length;
    let cols = grid[0].length;

    const dfs = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) return 0;

        let area = 1;
        grid[r][c] = 0;

        area += dfs(r + 1, c)
        area += dfs(r, c + 1)
        area += dfs(r - 1, c)
        area += dfs(r, c - 1)
        
        return area
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                const area = dfs(r, c);
                maxArea = Math.max(area, maxArea)
            }
        }
    }

    return maxArea;
};