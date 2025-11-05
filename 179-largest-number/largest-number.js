/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const strNums = nums.map(String);


    strNums.sort((a,b) => {
        const ab = a + b;
        const ba = b + a;
        return ba.localeCompare(ab);

    })

    if (strNums[0] === "0") {
        return "0";
    }

    return strNums.join("")
};