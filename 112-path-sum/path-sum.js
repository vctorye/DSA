/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // If the node is null, there is no path, so return false
    if (!root) return false;

    // If this is a leaf node (no children), check if the current node's value equals the target sum\
    if (!root.left && !root.right & targetSum - root.val === 0) return true;
    
    // Recursively check the left and right subtrees
    // Subtract the current node's value from targetSum and pass it down the tree
    return (
        hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
        )

    // Explanation of `||` (OR):
    // We use `||` because we only need one path to sum to the target.
    // If either left or right subtree has a path that meets the target sum,
    // the function will return true, stopping further recursion down other paths.
};