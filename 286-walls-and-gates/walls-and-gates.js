/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const rows = rooms.length
   const cols = rooms[0].length;
   const INF = 2147483647;
   const queue = [];
   const directions = [[1,0], [-1,0], [0, 1], [0, -1]];

   for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++) {
            if (rooms[i][j] === 0) {
                queue.push([i,j])
            }
        }
   }

   while (queue.length) {
        const [row, col] = queue.shift();
        
        for (let [dr,dc] of directions) {
            const r = row + dr
            const c = col + dc
        

        if (r < 0 || r >= rows||
            c < 0 || c >= cols ||
            rooms[r][c] !== INF
        ) continue;

        rooms[r][c] = rooms[row][col]  + 1;

        queue.push([r, c])
        }
   }
};
