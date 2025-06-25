/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
   // set variables 
    const rows = grid.length;
    const cols = grid[0].length;
    let maxArea = 0;

   // set dfs function
    const dfs = (r, c) => {
        // set bounds 
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) return 0

        // mark visited
        grid[r][c] = 0;
        let area = 1;

        // recursively explore all 4 directions and accumulate the area
        area += dfs(r + 1, c); // Down
        area += dfs(r - 1, c); // Up
        area += dfs(r, c + 1); // Right
        area += dfs(r, c - 1); // Left

        return area
    }
   // traverse thorugh grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                let area = dfs(r,c);
                maxArea = Math.max(maxArea, area)
            }
        }
    }
    return maxArea
};