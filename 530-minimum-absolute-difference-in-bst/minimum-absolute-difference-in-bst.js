var getMinimumDifference = function(root) {
    let minDiff = Infinity;
    let prevVal = null;
    const stack = [];
    let current = root;
    
    while (current || stack.length > 0) {
        // Go to leftmost node
        while (current) {
            stack.push(current);
            current = current.left;
        }
        
        // Process current node
        current = stack.pop();
        if (prevVal !== null) {
            minDiff = Math.min(minDiff, current.val - prevVal);
        }
        prevVal = current.val;
        
        // Move to right subtree
        current = current.right;
    }
    
    return minDiff;
};