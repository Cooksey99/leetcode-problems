/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let total = 0;

    operations.forEach(val => {
        if (val[0] === "-" || val[val.length - 1] === "-") total -= 1;
        else if (val[0] === "+" || val[val.length - 1] === "+") total +=1;
    });

    return total;
};