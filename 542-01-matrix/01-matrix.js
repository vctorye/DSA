/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
    let m = mat.length, n = mat[0].length;
    let queue = [];
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // Initialize distances with Infinity, except for cells with 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]); // Push all 0s into the queue
            } else {
                mat[i][j] = Infinity; // Mark 1s as "unvisited"
            }
        }
    }

    // Perform BFS
    while (queue.length > 0) {
        let [x, y] = queue.shift();
        for (let [dx, dy] of directions) {
            let newX = x + dx, newY = y + dy;
            if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
                // Only update if the new distance is shorter
                if (mat[newX][newY] > mat[x][y] + 1) {
                    mat[newX][newY] = mat[x][y] + 1;
                    queue.push([newX, newY]); // Push to process next
                }
            }
        }
    }

    return mat;
};
