/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// O(n), O(n)
var insert = function (intervals, newInterval) {
    let [start, end] = newInterval;
    let left = [];
    let right = [];

    for (let interval of intervals) {
        let [first, last] = interval;
        if (last < start) {
            left.push(interval);
        } else if (first > end) {
            right.push(interval);
        } else {
            start = Math.min(start, first);
            end = Math.max(end, last);
        }
    }

    return [...left, [start,end], ...right]
};