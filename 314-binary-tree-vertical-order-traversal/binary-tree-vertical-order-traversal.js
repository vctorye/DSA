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
    if (!root) return [];
    let map = {};
    let queue = [[root, 0]];

    while (queue.length > 0) {
        const [node, level] = queue.shift();

        if (!map[level]) {
            map[level] = [];
        }

        map[level].push(node.val);

        if (node.left) queue.push([node.left, level - 1]);
        if (node.right) queue.push([node.right, level + 1])

    }


    

    return Object.keys(map).sort((a, b) => a - b).map((k) => map[k])
    
}


