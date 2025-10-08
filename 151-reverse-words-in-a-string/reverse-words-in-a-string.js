/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let split = s.split(" ");
    let res = [];

    for (let i = split.length - 1; i >= 0; i--) {
        if (split[i]) {
            res.push(split[i]);
        }
    }

    return res.join(" ")
};