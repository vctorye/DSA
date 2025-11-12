/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // edge case 
    if (intervals.length === 0) return 0

    // sort out intervals
    intervals.sort((a, b) => a[1] - b[1]);

    // set variables 
    let count = 1;
    let lastEnd = intervals[0][1];      

    // iterate through intervals
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        if (start >= lastEnd) {
            count++;
            lastEnd = end
        }
    }

    return intervals.length - count
};