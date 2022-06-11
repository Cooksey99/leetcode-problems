/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let temp = x.toString().split('');
    let array = [];
    let negative = false;
    
    if (x < 0) negative = true;
    
    for (let i = temp.length; i > 0; i--) {
        if (temp[i - 1] !== 0) array.push(temp[i - 1]);
    }
    
    if (parseInt(array.join(''), 10) < -2147483648 || parseInt(array.join('')) > 2147483647) {
        return 0;
    }
    else if (negative === true) {
        let result = '-' + array.join('');
        return parseInt(result, 10);
    }
    
    else return parseInt(array.join(''), 10);
    
};