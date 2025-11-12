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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    // edge case
    if (!root) return -1

    // set variables
    let min = root.val
    let secondMin = Infinity; 

    // dfs function 
    function dfs(node){
        if (!node) return;

        if (node.val > min) {
            secondMin = Math.min(node.val, secondMin)
            return
        }

        dfs(node.left)
        dfs(node.right)
    }

    // call dfs on root and return second min
    dfs(root);
    return secondMin === Infinity ? -1 : secondMin
};