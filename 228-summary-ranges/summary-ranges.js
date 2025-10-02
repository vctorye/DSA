/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    // base case
    if (nums.length === 0) {
        return []
    }
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];

        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++
        }

        if (start === nums[i]) {
            res.push(String(start))
        } else {
            res.push(`${start}->${nums[i]}`)
        }
    }
    return res;
};