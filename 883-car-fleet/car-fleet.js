/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = [];
    for (let i = 0; i < position.length; i++) {
        cars.push({pos : position[i], speed: speed[i]});
    }

    cars.sort((a, b) => b.pos - a.pos);

    let fleets = 0;
    let maxTime = 0;

    for (const car of cars) {
        const time = (target - car.pos)/ car.speed

        if (time > maxTime) {
            fleets++
            maxTime = time;
        }
    }
    return fleets 
};