const reverseString = function(s) {
    let rev = "";
    for (let i = s.length; i >= 0; --i) {
        rev += s.charAt(i);
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
