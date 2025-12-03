/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1]; // Start with first row

    for (let i = 1; i <= rowIndex; i++) {
        row.push(1); // Add 1 at the end
        for (let j = i - 1; j > 0; j--) { // Update in reverse
            row[j] += row[j - 1]; // Compute new values using previous row
        }
    }

    return row;
};