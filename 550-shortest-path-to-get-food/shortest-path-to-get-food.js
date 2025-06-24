/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    const queue = [];

    // Step 1: find the starting point '*'
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '*') {
                queue.push([r, c, 0]); // [row, col, steps]
                break;
            }
        }
    }

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[queue[0][0]][queue[0][1]] = true;

    // Step 2: BFS
    while (queue.length > 0) {
        const [r, c, steps] = queue.shift();

        if (grid[r][c] === '#') return steps;

        for (let [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                !visited[nr][nc] &&
                grid[nr][nc] !== 'X'
            ) {
                visited[nr][nc] = true;
                queue.push([nr, nc, steps + 1]);
            }
        }
    }

    return -1; // no path to food
};
