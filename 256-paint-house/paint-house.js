/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    if (costs.length === 0) return 0;

    let [red, blue, green] = costs[0];

    for (let i = 1; i < costs.length; i++) {
         [red, blue, green] = [
            costs[i][0] + Math.min(blue, green),
            costs[i][1] + Math.min(red, green),
            costs[i][2] + Math.min(red, blue) 
        ]
    }

    return Math.min(red, blue, green)
};