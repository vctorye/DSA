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
var inorderTraversal = function(root) {
    // set variables for stack res and curr
    let stack = [], res = [], curr = root;
    // create while loop for while both curr and stacklength exist
    while (curr || stack.length) {
        // while curr still exists push curr into stack and traverse to left side of tree
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        // else, we pop from stack and push into res and go to the right of free
        curr = stack.pop()
        res.push(curr.val)
        curr = curr.right;
    }
    return res;
};