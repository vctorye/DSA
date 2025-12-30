var missingNumber = function(arr) {
    const n = arr.length;

    // find diff by subratctiung last and first and dividing by length
    let diff = (arr[n - 1] - arr[0]) / n

    for (let i = 0; i < n; i++) {
        if (arr[i + 1] !== arr[i] + diff) {
            return arr[i] + diff
        }
    }
    return arr[0]
};