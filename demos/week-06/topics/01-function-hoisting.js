console.log(sum1(12, 13));

// function declaration syntax
function sum1(x, y) {
    return x + y;
}

console.log(sum2(12, 13));

// function expression syntax (the RHS is a function expression)
var sum2 = function (x, y) {
    return x + y;
}