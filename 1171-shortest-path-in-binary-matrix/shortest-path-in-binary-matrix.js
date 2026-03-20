/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    // base case
    if (grid[0][0] === 1 || grid[grid.length - 1][grid[0].length - 1] === 1) return -1
 
    // initiate variables 
    let queue = [[0, 0, 1]];
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
       [1, -1], [1, 0], [1, 1]
    ]

    // tranverse grid in queue
    while (queue.length) {
        const [currX, currY, count] = queue.shift();

        if (currX === grid.length - 1 && currY === grid[0].length - 1) {
            return count
        }

        for (let [x, y] of directions) {
            let [nextX, nextY] = [currX + x, currY + y];

            if (nextX < 0 || nextX > grid.length -1 || nextY < 0 || nextY > grid[0].length - 1 || grid[nextX][nextY] ===  1) {
                continue 
            }

            queue.push([nextX, nextY, count + 1]);

            grid[nextX][nextY] = 1

        }
    }
    return -1
};