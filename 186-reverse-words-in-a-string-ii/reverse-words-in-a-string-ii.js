/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    const n = s.length;

    function reverse(start, end) {
        while (start < end) {
            [s[start], s[end]] = [s[end],s[start]];
            start++
            end--
        }

    }

    reverse(0,n - 1);

    let start = 0; 
    for (let end = 0; end <= n; end++ ) {
        if (end === n || s[end] === " ") {
            reverse(start,end - 1);
            start = end + 1
        }
    }
};