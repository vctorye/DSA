/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // check if trees are null
    if (p === null && q === null) return true;
    // check if only one tree is null
    if (p === null || q === null) return false;
    // return false is the values are not the same 
    if (p.val !== q.val) return false;
    // call recursive function with the left side and right side
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

};