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
var diameterOfBinaryTree = function(root) {
    // set maxdiameter variable 
    let maxDiameter = 0;

    // define our dfs function 
    const dfs = (node) => {
        if (!node) return 0;

        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        return Math.max(leftHeight, rightHeight) + 1
    }

    dfs(root);
    return maxDiameter;
};

