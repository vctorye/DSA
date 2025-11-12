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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
     function isSameTree(p, q) {
        // Base cases
        if (!p && !q) return true;  // Both null
        if (!p || !q) return false; // One null, one not null
        if (p.val !== q.val) return false; // Values don't match
        
        // Recursively check left and right subtrees
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    if (!root) return !subRoot;

    if (isSameTree(root, subRoot)) return true

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};