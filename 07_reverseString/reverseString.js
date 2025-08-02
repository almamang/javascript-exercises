const reverseString = function(strings) {
    const toArray = strings.split('');
    let reversed = ''
    for (let i = toArray.length - 1 ; i >= 0; i--) {
        reversed += toArray[i]
    };
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
