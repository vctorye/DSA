/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const  m = matrix.length, n = matrix[0].length;
    const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    const memo = Array.from({length: m}, () => Array(n).fill(0));
    let result = 0

    const dfs = (r, c) => {
        if (memo[r][c] !== 0) return memo[r][c];

        let best = 1;

        for (let [dr, dc] of  dirs) {
            const nr = r + dr;
            const nc = c + dc;
            if (
                nr >= 0 && nr < m &&
                nc >= 0 && nc < n &&
                matrix[nr][nc] > matrix[r][c]
            ){
                best = Math.max(best, 1 + dfs(nr, nc));
            }
        }

        memo[r][c] = best;
        return best
    } 

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result = Math.max(result, dfs(i, j)) 
        }
    }
    return result
};