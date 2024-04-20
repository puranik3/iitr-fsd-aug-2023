function sum1(x, y) {
    return x + y;
}

console.log(sum1(12, 13));

const sum2 = function (x, y) {
    return x + y;
};

console.log(sum2(12, 13));

// arrow function syntax
const sum3 = (x, y) => {
    return x + y;
};

console.log(sum3(12, 13));

// for one-liner functions you can simplify the syntax like so... (omit BOTH {} and return keyword)
const sum4 = (x, y) => x + y;

console.log(sum4(12, 13));

// for functions accepting exactly one argument (omit argument parenthesis)
const square = x => x * x;
console.log(square(12));