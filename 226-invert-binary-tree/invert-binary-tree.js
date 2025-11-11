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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root ) return null;

    const leftInverted = invertTree(root.left); 
    const rightInverted = invertTree(root.right);

    root.left = rightInverted;
    root.right = leftInverted;
    return root
};