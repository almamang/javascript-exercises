const sumAll = function(fromNum, toNum) {
    let sum = 0
    if (!Number.isInteger(fromNum) || !Number.isInteger(toNum)) return 'ERROR';
    if (fromNum < 0 || toNum < 0) return 'ERROR';
    if (fromNum > toNum) {
        let temp = fromNum;
        fromNum = toNum;
        toNum = temp;
    };

    for (let i = fromNum; i <= toNum; i++) {
        sum += i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
