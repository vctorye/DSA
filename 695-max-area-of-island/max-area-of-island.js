/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    // variables 
    const rows = grid.length;
    const cols = grid[0].length;
    let maxArea = 0;

    // dfs funciton
    const dfs = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) return 0;
        grid[r][c] = 0
        let area = 1;

        area += dfs(r + 1, c)
        area += dfs(r - 1, c)
        area += dfs(r, c + 1)
        area += dfs(r, c - 1)

        return area

    }
    // iterate thorugh grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                let area = dfs(r, c)
                maxArea = Math.max(maxArea, area)
            } 
        }
    }
    return maxArea
};