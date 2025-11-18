/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    // set variables 
    let graph = new Map();
    let visited = new Set()
   // make an adjacent list 
    for (let [v, e] of edges) {
        if (graph.has(v)) {
            graph.get(v).push(e)
        } else {
            graph.set(v, [e]);
        }
        if (graph.has(e)) {
            graph.get(e).push(v)
        } else {
            graph.set(e, [v]);
        }
    }

   // create dfs function
   function dfs (vertex) {
        visited.add(vertex);

        let neighbors = graph.get(vertex);

        if (neighbors && neighbors.length > 0) {
            for (let i = 0; i < neighbors.length; i++) {
                if (!visited.has(neighbors[i])) {
                    dfs(neighbors[i])
                }
            }
        }

    }
    dfs(source);

    return visited.has(destination)

};