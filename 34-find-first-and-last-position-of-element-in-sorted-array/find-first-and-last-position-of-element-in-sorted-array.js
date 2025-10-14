/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let j = null 
    let result = [0,0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (j === null) {
                result[0] = i
                j = i 
            } else {
                j++
            }
        }
    } 

    if (j !== null) {
        result[1] = j
        return result
    } else {
        return [-1, -1]
    }
};