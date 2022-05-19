/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelTypes = jewels.split('');
    let count = 0;
    
    stones.split('').forEach(stone => {
        if (jewelTypes.includes(stone)) count += 1
    })
    
    return count;
};