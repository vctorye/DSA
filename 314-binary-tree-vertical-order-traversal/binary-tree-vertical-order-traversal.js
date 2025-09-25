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
var verticalOrder = function(root) {
    // base case
    if (!root) return [];

    // initiate variables 
    let queue = [[root, 0]];
    let map = {};

    // iterate through 
    while(queue.length) {
        const [node, level ] = queue.shift();

        if (!map[level]) {
            map[level] = [];
        }

        map[level].push(node.val);
        if (node.left) queue.push([node.left, level - 1])
        if (node.right) queue.push([node.right, level + 1])
        

    }  
    // return result arayu 
     return Object.keys(map)
       .sort((a, b) => a - b)
       .map((k) => map[k]);
}; 

