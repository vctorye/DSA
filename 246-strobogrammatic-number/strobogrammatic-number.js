/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    const mapping = {
        '0': '0',
        '1': '1', 
        '8': '8',
        '6': '9',
        '9': '6'
    };
    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        const leftChar = num[left];
        const rightChar = num[right];

        if (!mapping[leftChar] || mapping[leftChar] !== rightChar) {
            return false;
        }

        left++;
        right--
     }

     return true 

};