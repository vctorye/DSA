/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let maxDist = 0;

    let min = arrays[0][0];
    let max = arrays[0][arrays[0].length - 1];

    for (let i = 1; i < arrays.length; i++) {
        let currentMin = arrays[i][0]
        let currentMax = arrays[i][arrays[i].length - 1]

        maxDist = Math.max(
            maxDist,
            currentMax - min,
            max - currentMin
        );

        min = Math.min(currentMin, min);
        max = Math.max(currentMax, max)
        console.log(maxDist)
    }
    return maxDist
};