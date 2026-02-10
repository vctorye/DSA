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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return[];
    let queue = [root];
    let result = []; 

    while (queue.length > 0) {
        const length = queue.length;
        let array = [];
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            array.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(array)
    }

    return result
};
