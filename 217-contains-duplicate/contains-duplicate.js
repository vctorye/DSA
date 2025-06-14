/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newset = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (newset.has(nums[i])) {
            return true;
        } else {
            newset.add(nums[i])
        }
    }
    return false
};