/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") return 0;

    let hLeft = 0;
    let nLeft = 0;

    while (hLeft < haystack.length) {
        if (haystack[hLeft] === needle[nLeft]) {
            hLeft++;
            nLeft++;

            if (nLeft === needle.length) return hLeft - nLeft;
        } else {
            hLeft = hLeft - nLeft + 1;
            nLeft = 0
        }
    }

    return -1
};