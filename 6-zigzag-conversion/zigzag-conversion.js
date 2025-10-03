/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // base case 
    if (numRows === 1) return s;

    //set the rows 
    let rows = Array(Math.min(numRows,s.length)).fill("").map(() => "");
    let currentRow = 0, goingDown = false;

    for (let char of s) {
        rows[currentRow] += char;
        if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
        currentRow += goingDown ? 1 : -1;
    }
    return rows.join('')
};