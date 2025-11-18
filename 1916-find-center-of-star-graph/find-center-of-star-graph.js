/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const map = new Map();

    for (const [u, v] of edges) {
        map.set(u,(map.get(u) || 0) + 1);
        map.set(v,(map.get(v) || 0) + 1);

    }

    for (const [node, count] of map) {
        if (count === edges.length) {
            return node
        }
    }
};