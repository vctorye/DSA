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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const checkVal = (node, min, max) => {
        if (node === null) return true; // Base case: empty node is valid

        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false; // Value violates the BST property
        }

        // Recursively check left and right subtrees with updated constraints
        return checkVal(node.left, min, node.val) && checkVal(node.right, node.val, max);
    };

    return checkVal(root, null, null); // Initial range is infinite
};