var swapNodes = function(head, k) {
   let current = head;

   for (let i = 1; i < k; i++) {
        current = current.next;
   }
   const first = current;

   let slow = head;
   let fast = current;

    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
   }

    const second = slow;

    const temp = first.val;
    first.val = second.val;
    second.val = temp;

    return head
};

// find where ur kth node is. once its found u keep the distance between head and kth node till the end 