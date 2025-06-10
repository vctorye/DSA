/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals.length) return [];

    intervals.sort((a,b) => a[0] - b[0]);

    const result = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const last = result[result.length - 1];

        if (start <= last[1]) {
            last[1] = Math.max(last[1], end);
        } else {
            result.push([start, end]);
        }
    }

    return result
};