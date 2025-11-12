/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // initialize stack and create array for result 
    let result = new Array(temperatures.length).fill(0);
    let stack = [];

    // itereate through temperatures 
    for (let i = 0; i < temperatures.length; i++) {
        // while the stack exists and the temp[i] is greater than temp of last stack index
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            // pop the index of the cooler day 
            const prevIndex = stack.pop();
            //calculate the days between
            result[prevIndex] = i - prevIndex;
        }
        // push current day into stack
        stack.push(i);
    }
    return result;
};
