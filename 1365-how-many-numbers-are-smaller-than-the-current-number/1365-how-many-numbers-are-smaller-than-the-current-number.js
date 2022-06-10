/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let array = [];
    
    nums.forEach(num => {
        let count = 0;
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < num) count = count + 1;
        }
        
        array.push(count);
    });
    
    return array;
};