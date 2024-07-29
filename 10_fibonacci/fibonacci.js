const fibonacci = function(n) {
    let num = Number(n);
    if (num < 0) return "OOPS";
    if (num <= 1) return num;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
