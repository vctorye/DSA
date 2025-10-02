/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let visited = new Set()
    let curr = head;

    while (curr) {
        if (visited.has(curr)) {
            return true;
        } else {
            visited.add(curr);
            curr = curr.next
        }
    }
    return false;
};