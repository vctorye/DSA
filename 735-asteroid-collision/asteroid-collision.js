/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];
   
    for (let asteroid of asteroids) {
        let survived = true;
        while(stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
            const top = stack[stack.length - 1];
            if (Math.abs(asteroid) > top) {
                stack.pop();
            } else if (Math.abs(asteroid) === top) {
                stack.pop();
                survived = false;
                break;
            } else {
                survived = false;
                break;
            }
        }
        if (survived) {
            stack.push(asteroid)
        }
    }
    return stack
};
