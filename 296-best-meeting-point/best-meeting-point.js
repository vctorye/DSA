/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
    const rows = [];
    const cols = [];

    // collect row indices
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 1) rows.push(r);
        }
    }

    // collect column indices
    for (let c = 0; c < grid[0].length; c++) {
        for (let r = 0; r < grid.length; r++) {
            if (grid[r][c] === 1) cols.push(c);
        }
    }

    const getMedianDistance = (points) => {
        let res = 0;
        let i = 0, j = points.length - 1;
        while (i < j) {
            res += points[j] - points[i];
            i++;
            j--;
        }
        return res;
    }

    return getMedianDistance(rows) + getMedianDistance(cols);
};
