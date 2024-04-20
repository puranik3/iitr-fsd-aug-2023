const USD_TO_INR = 83;

// reassignment is not allowed (which you can with let)
// USD_TO_INR = 84; // error

console.log(USD_TO_INR);

const john = {
    name: 'John',
    age: 32
};

// error -> reassignment
// john = {
//     name: 'John',
//     age: 33
// };

john.age++; // you can change properties of objects (similarly in array you can add values to a const array, you can edit values in the array)

console.log(john);