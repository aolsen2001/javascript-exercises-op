const repeatString = function(s, n) {
    if(n < 0) return "ERROR";
    let repeat = "";
    for (let i = 0; i < n; ++i) {
        repeat += s;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
