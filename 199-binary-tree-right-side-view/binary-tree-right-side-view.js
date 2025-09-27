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
 * @return {number[]}
 */
var rightSideView = function(root) {
    // Initialize the result array to store the right side view
    const result = [];

    // Define a recursive DFS function that takes a node and its level as arguments
    function dfs(node, level) {
        // Base case: if the node is null, return
        if (!node) return;

        // If this level hasn't been visited, add the node's value to the result
        if (result.length === level) {
            result.push(node.val);
        }

        // Traverse the right subtree first to prioritize rightmost nodes
        dfs(node.right, level + 1);

        // Then traverse the left subtree
        dfs(node.left, level + 1);
    }

    // Start DFS from the root at level 0
    dfs(root, 0);

    // Return the result array containing the right side view
    return result;
};

/*
    To solve this problem, we use level tracking as we traverse the tree. We 
    define a function to recursively explore each node while keeping track of 
    the current level. If the level is equal to the length of the result array, 
    it indicates that this level hasn’t been recorded yet, so we add the node’s 
    value to the result. After completing the traversal, we return the result 
    array, which contains the rightmost node at each level.
*/