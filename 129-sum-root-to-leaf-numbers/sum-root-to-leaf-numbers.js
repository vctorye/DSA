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
var sumNumbers = function(root) {
    // Define a helper function `dfs` to perform depth-first search on the tree
   var dfs = (node, num) => {
       if (!node) {
           return 0;  // If the current node is null, return 0 (no contribution to the sum)
       }


       // Update the current number by shifting previous `num` by one decimal place
       // and adding the current node's value
       num = num * 10 + node.val;


       // If the current node is a leaf (no left or right child), return the current number
       if (!node.right && !node.left) {
           return num;
       }


       // Recursively call `dfs` on left and right children, and sum their results
       return dfs(node.left, num) + dfs(node.right, num);
   }


   // Initiate DFS from the root node with an initial number of 0
   return dfs(root, 0);

};