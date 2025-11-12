/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0); // Dummy node to simplify edge cases
    let current = dummy;
    let carry = 0;

    // Traverse both lists
    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        // Calculate the sum and carry
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        // Create a new node for the sum's ones digit
        current.next = new ListNode(sum % 10);
        current = current.next;

        // Move to the next nodes
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next; // Return the next node after the dummy
};

