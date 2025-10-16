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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return;

    // Recursively flatten left and right subtrees
    flatten(root.left);
    flatten(root.right);
    // Save the original right subtree
    const temp = root.right;

    // Move the flattened left subtree to the right
    root.right = root.left;
    root.left = null;

    // Traverse to the end of the new right subtree
    let current = root;
    while (current.right) {
        current = current.right;
    }

    // Attach the saved right subtree
    current.right = temp;
};