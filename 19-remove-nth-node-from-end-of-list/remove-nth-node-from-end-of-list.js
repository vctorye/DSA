/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let current1 = head;

    while (current1 !== null) {
        length++;
        current1 = current1.next;
    }

    let foundIndex = length - n;
    if (foundIndex === 0) {
        return head.next; // Return the new head after removing the first node
    }
    let current = head;
    let index = 0
    while (current !== null) {
        if (index === foundIndex - 1) {
            current.next = current.next.next;
            break;
        }
        current = current.next;
        index++;
    }
    return head
};














