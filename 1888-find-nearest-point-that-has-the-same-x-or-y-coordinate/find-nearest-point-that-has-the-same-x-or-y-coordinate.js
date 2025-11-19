/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let minDistance = Infinity;
    let point = -1
    for (let i = 0; i < points.length; i++) {
        const [a, b] = points[i]
        if (a === x || b === y ) {
            let distance = Math.abs(x - a) + Math.abs(y - b);
            if (distance < minDistance) {
                minDistance = distance;
                point = i
            }
        }
    }

    return point
};