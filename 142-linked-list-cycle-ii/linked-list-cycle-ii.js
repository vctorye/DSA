var detectCycle = function(head) {
    if (!head || !head.next) return null;

    let slow = head, fast = head;

    // Step 1: Detect if there's a cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    // If no cycle
    if (!fast || !fast.next) return null;

    // Step 2: Find the cycle start
    let ptr = head;
    while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
    }

    return ptr; // or slow — they meet at cycle start
};