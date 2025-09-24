/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
 /* 
 recursive solution
   s = s.toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    console.log(s)
if (s.length === 0 ) return true;
if (s.length === 1 ) return true;
if (s[0] !== s[s.length - 1]) return false;
return isPalindrome(s.slice(1,-1))
*/
// simple solution 
    const cpyStr = s.toLowerCase().replace(/[^a-z0-9]/g, '')

    return cpyStr === cpyStr.split('').reverse().join('')


};