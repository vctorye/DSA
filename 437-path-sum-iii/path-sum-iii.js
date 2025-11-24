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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (!root) return 0;

   const countFromCurrent = countPath(root, targetSum);

   const countFromLeft = pathSum(root.left, targetSum);
   const countFromRight = pathSum(root.right, targetSum);
    return countFromCurrent + countFromLeft + countFromRight;

};

function countPath(node, targetSum) {
    if (!node) return 0;
    let count = 0
    if (node.val === targetSum) {
        count = 1
    };

    count += countPath(node.left, targetSum - node.val)
    count += countPath(node.right, targetSum - node.val)
    return count 

}