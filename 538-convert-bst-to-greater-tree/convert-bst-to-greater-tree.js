var convertBST = function(root) {
    let sum = 0;

    function reverseInorder(node) {
        if (!node) return;

        // Traverse right first
        reverseInorder(node.right);

        // Update current node
        sum += node.val;
        node.val = sum;

        // Then traverse left
        reverseInorder(node.left);
    }

    reverseInorder(root);
    return root;
};