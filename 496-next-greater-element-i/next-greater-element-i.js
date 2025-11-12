var nextGreaterElement = function(nums1, nums2) {
    const nextGreater = {};
    const stack = [];

    // Process nums2 from right to left
    for (let i = nums2.length - 1; i >= 0; i--) {
        const num = nums2[i];

        // Pop elements smaller than current (they can't be next greater for anyone left)
        while (stack.length > 0 && stack[stack.length - 1] <= num) {
            stack.pop();
        }

        // If stack is empty, no greater element; else, top is next greater
        nextGreater[num] = stack.length === 0 ? -1 : stack[stack.length - 1];

        stack.push(num);
    }

    // Map nums1 through the lookup table
    return nums1.map(x => nextGreater[x]);
};