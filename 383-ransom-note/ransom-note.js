/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = {};

    for (let letter of magazine) {
        if (!map[letter]) {
            map[letter] = 1
        } else {
            map[letter]++
        }
    }

    for (let letter of ransomNote) {
        if (map[letter]) {
            map[letter]--
        } else if (map[letter] < 0) {
            return false
        } else {
            return false
        }
    }

    return true
    
};