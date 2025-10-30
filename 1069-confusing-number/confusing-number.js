var confusingNumber = function(n) {
    const valid = { '0': '0', '1': '1', '6': '9', '8': '8', '9': '6' };
    const str = n.toString();
    let rotated = '';

    // Build rotated string (in reverse order)
    for (let i = str.length - 1; i >= 0; i--) {
        const digit = str[i];
        if (!(digit in valid)) {
            return false; // contains invalid digit
        }
        rotated += valid[digit];
    }

    // Check if rotated number is different from original
    return parseInt(rotated) !== n;
};