/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = [];
    const path = [];
    
    function isValid(seg) {
        if (seg.length === 0 || seg.length > 3) return false;

        if (seg.length > 1 && seg[0] === '0') return false;

        const num = Number(seg);

        return num >= 0 && num <= 255;
    }

    function backtrack(idx) {
        if (path.length === 4) {
            if (idx === s.length) res.push(path.join('.'));
            return
        }

        const remainingSegments = 4 - path.length;
        const remainingChars = s.length - idx;
        if (remainingChars < remainingSegments || remainingChars > remainingSegments * 3) return;

        for (let len = 1; len <= 3; len++) {
            if (idx + len > s.length) break;

            const seg = s.slice(idx,idx + len);
            if (!isValid(seg)) continue;

            path.push(seg);
            backtrack(idx + len);
            path.pop();
        }
    }

    backtrack(0);
    return res
}