var numberGame = function(nums) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);
    
    // Step 2: Swap adjacent pairs
    for (let i = 0; i < nums.length; i += 2) {
        // Swap nums[i] and nums[i+1]
        [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
    }
    
    return nums;
};