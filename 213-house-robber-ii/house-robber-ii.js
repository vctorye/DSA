var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
    function robRange(start, end) {
        let prev2 = nums[start];
        let prev1 = Math.max(nums[start], nums[start + 1]);
        
        for (let i = start + 2; i <= end; i++) {
            const current = Math.max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = current;
        }
        
        return prev1;
    }
    
    return Math.max(robRange(0, nums.length - 2), robRange(1, nums.length - 1));
};