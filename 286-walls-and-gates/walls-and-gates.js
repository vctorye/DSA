/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const rows = rooms.length;
    const cols = rooms[0].length;
    const INF = 2147483647;
    const queue = [];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]


    // find all gates
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (rooms[r][c] === 0) {
                queue.push([r,c])
            }
        }
    }


    // search going out from the gate
    while (queue.length) {
        const [row, col] = queue.shift();

        for (let [nr, nc] of directions) {
            const r = nr + row;
            const c = nc + col;

            if (r < 0 || r >= rows||
                c < 0 || c >= cols||
                rooms[r][c] !== INF 
            ) continue;

            rooms[r][c] = rooms[row][col] + 1;

            queue.push([r, c])
        }
        
    }
};
