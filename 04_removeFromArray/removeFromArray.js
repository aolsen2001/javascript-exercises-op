const removeFromArray = function(arr, ...args) {
    const newArr = [];
    arr.forEach((n) => {
        if(!args.includes(n)) {
            newArr.push(n);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
