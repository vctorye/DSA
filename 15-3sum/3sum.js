/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) continue;

        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left + 1] === nums[left]) left++;
                while (left < right && nums[right - 1] === nums[right]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--
            }
        }
    }
    return result
};

