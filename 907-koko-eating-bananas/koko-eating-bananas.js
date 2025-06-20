/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // set variables
    let left = 1 // 1 banana per hour
    let right = Math.max(...piles) // max speed

    // set a helper function to check if koko can finish
    const canFinish = (speed) => {
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile/speed)
        }
        return hours <= h
    }

    // loop thorugh piles to find the minimum speed
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (canFinish(mid)) {
            right = mid; // try a slower speed
        } else {
            left = mid + 1; // too slow
        }
    }
    return left
};