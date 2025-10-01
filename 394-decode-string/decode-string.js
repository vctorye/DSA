/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function(s) {
    // create stack array
    let stack = [];
    // set variables for current string and num 
    let currNum = 0;
    let currStr = "";
    // loop thorugh string
    for ( let char of s) {
    // if element is num we to update current num
        if (!isNaN(char)) {
            // in this line we are making sure that we are able to deal with double digit numbers
            currNum = currNum * 10 + Number(char);
        } else if (char === "["){
             // if element is open bracket then push currstr and num into stack
             // reset currstr and num for upcoming chars inside brackets
            stack.push(currStr);
            stack.push(currNum);
            currStr = "";
            currNum = 0
        } else if (char === "]") {
            // if element is closed bracket then pop out num and update currStr
            const num = stack.pop();
            const prevStr = stack.pop();
            currStr = prevStr + currStr.repeat(num)
        } else {
            // if char is just character we add to currSTr
            currStr += char
        }

    }
    return currStr
};