/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
   const rows = grid1.length, cols = grid1[0].length;

   const dfs = (r, c) => {
        // check bounds
        if (r < 0 ||  r >= rows || c < 0 || c >= cols || grid2[r][c] !== 1) return true 

        // mark visited
        grid2[r][c] = -1;

        let isSub = grid1[r][c] === 1
        //check directions 
        let up = dfs(r + 1, c);
        let down = dfs(r - 1, c);
        let left = dfs(r, c - 1);
        let right = dfs(r, c + 1);
        return isSub && up && down && left && right;
   }
    let count = 0;


    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid2[r][c] === 1) {
                if (dfs(r,c)) count++
            }
        }
    }
    return count

};