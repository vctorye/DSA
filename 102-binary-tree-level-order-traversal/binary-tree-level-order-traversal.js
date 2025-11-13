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
// base cases
  if (!root) return [];




  // initialize queue array and result array
  let queue = [root];
  let result = [];




  //  while there is a queue
  while (queue.length) {
      // initialize variables for level length and current level
      let levelSize = queue.length
      let currentLevel = []




      // for loop in the level length
      for (let i = 0; i < levelSize; i++) {
          //shift out node and push this into currentlevel
          const node = queue.shift()
          currentLevel.push(node.val)




          // add children node to the queue
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
      // push the currentlevel to result
      result.push(currentLevel)
  }
  // return results
  return result



};
