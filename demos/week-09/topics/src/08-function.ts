// syntax 1
// return type is inferred in this syntax of typing a function
function sum(x: number, y: number) /*: number */ {
    return x + y;
}

// typing function expression
const add = (x: number, y: number) /*: number */ => x + y;

// syntax 2
// const multiply: (a: number, b: number) => number = (x, y) => x * y;
// const divide: (a: number, b: number) => number = (x, y) => x / y;

type BinaryFunction = (a: number, b: number) => number;

const multiply: BinaryFunction = (x, y) => x * y;
const divide: BinaryFunction = (x, y) => x / y;

// higher-order functions
type EventObj = {
    // preventDefault: () => void
    name: string;
};

type EventHandler = (event?: EventObj) => void;

// callback can be given a data type using syntax 2 only
function addEventListener(event: string, callback: EventHandler) {
    // code...
}

addEventListener("click", function () {});

// addEventListener("click", function (e: string) {}); // error

let e: Event;
