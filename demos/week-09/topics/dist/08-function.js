"use strict";
// syntax 1
// return type is inferred in this syntax of typing a function
function sum(x, y) {
    return x + y;
}
// typing function expression
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
// callback can be given a data type using syntax 2 only
function addEventListener(event, callback) {
    // code...
}
addEventListener("click", function () { });
// addEventListener("click", function (e: string) {}); // error
let e;
