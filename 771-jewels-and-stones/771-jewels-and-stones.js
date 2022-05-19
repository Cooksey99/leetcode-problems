/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelTypes = jewels.split('');
    let count = 0;
    
    for(let i = 0; i < stones.length; i++) {
        if (jewelTypes.includes(stones[i])) count += 1
    }
    
    return count;
};