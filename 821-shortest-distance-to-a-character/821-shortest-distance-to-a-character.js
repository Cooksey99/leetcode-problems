// /**
//  * @param {string} s
//  * @param {character} c
//  * @return {number[]}
//  */
// var shortestToChar = function(s, c) {
    
//     let result = [];
//     let frontCount = 0;
//     let backCount = 0;
    
//     for (let i = 0; i < s.length; i++) {
    
//         for (let j = 0; j < s.length; j++) {
//             if (s.split('')[j] !== c) frontCount += 1;    
//             if (s.split('')[s.length - j] !== c) backCount += 1;
            
//             else if (s.split('')[j] === c || s.split('')[s.length - j] === c) {
//                 if (frontCount <= backCount) result.push(frontCount);
//                 else result.push(backCount);
//                 break;
//             }
//         }
        

//         backCount = 0;
//         fronCount = 0;
//     }
    
//     return result;
// };

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
	// Initiate an array of length equal to s and fill 0 at index where s[i] == c
    let ans = new Array(s.length).fill(null)
    for (let i = 0; i < s.length; i++) {
        if (s[i] == c) ans[i] = 0
    }
    
	// indices is the array of s[i] == c
    let indices = []
    for (let i = 0; i < ans.length; i++) {
        if (ans[i] === 0) indices.push(i)
    }
    

    for (let i = 0; i < indices.length; i++) {
        let left = indices[i]
        let right = indices[i+1]
        let dist = 0;
        while (left <= right) {
            ans[left] = dist
            ans[right] = dist
            left++
            right--
            dist++
        }
    }
    
    for (let i = indices[0], count = 0; i >=0 ; i--) {
        ans[i] = count
        count++
    }
    
    for (let j = indices[indices.length-1], count = 0; j <ans.length ; j++) {
        ans[j] = count
        count++
    }
    return ans
    
};