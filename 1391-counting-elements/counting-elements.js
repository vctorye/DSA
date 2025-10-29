/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let numSet = new Set(arr);
    let count = 0;

    for (const num of arr) {
        if (numSet.has(num + 1)) { 
            count++
        }
    }
    return count
};