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
    // dfs way
    // const result = [];

    // function dfs(node, level) {
    //     if (!node) return;

    //     if (result.length === level) {
    //         result.push(node.val);
    //     }

    //     dfs(node.right, level + 1);

    //     dfs(node.left, level + 1);
    // }

    // dfs(root, 0);
    // return result 

    // queue
    if (!root) return [];
    const result = [];
    let queue = [root]

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (i === levelSize - 1) {
                result.push(node.val);
            }
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)

        }
    }

    return result
};

/*
    To solve this problem, we use level tracking as we traverse the tree. We 
    define a function to recursively explore each node while keeping track of 
    the current level. If the level is equal to the length of the result array, 
    it indicates that this level hasn’t been recorded yet, so we add the node’s 
    value to the result. After completing the traversal, we return the result 
    array, which contains the rightmost node at each level.
*/    