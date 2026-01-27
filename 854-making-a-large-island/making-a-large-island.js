/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const n = grid.length;
    let islandId = 2;
    let hasLand = false;
    const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    let areaMap = new Map();

    const dfs = (r, c, id) => {
   if (r < 0|| r >= n || c < 0|| c >= n || grid[r][c] !== 1) return 0;
        grid[r][c] = id;
        let area = 1;


        for (let [dr, dc] of directions) {
            area += dfs(r + dr, c + dc, id)
        }

        return area
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                hasLand = true
                let area = dfs(r, c, islandId);
                areaMap.set(islandId, area)
                islandId++
            }
        }
    }
    if (!hasLand) return 1;

    let maxArea = Math.max(...areaMap.values());

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) {
                let seen = new Set();
                let newSize = 1;
                for (let [dr, dc] of directions) {
                    let nr = r + dr, nc = c + dc;
                    if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] > 1) {
                        let id = grid[nr][nc];
                        if (!seen.has(id)) {
                            seen.add(id);
                            newSize += areaMap.get(id);
                        } 
                    }
                }
                maxArea = Math.max(maxArea, newSize)
            }
        }
    }
    return maxArea
};