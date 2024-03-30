// forEach(), find(), filter(), map()
const persons = [
    {
        name: 'John',
        age: 32,
        city: 'New York'
    },
    {
        name: 'Jane',
        age: 28,
        city: 'Paris'
    },
    {
        name: 'Mark',
        age: 40,
        city: 'New York'
    }
];

// arguments object and typeof operator is used for function overloading
persons.forEach(function (person, idx) {
    console.log(person, idx);
});

function foo(x) {
    console.log(x);
}

foo(1, 2, 3);

const newYorkers = persons.filter(function (person) {
    return person.city === 'New York';
});

console.log(newYorkers);

const firstNewYorker = persons.find(function (person) {
    return person.city === 'New York';
});

console.log(firstNewYorker);

// [ 'John', 'Jane', 'Mark' ]
const names = persons.map(function (person) {
    return person.name;
});
console.log(names);

// const newYorkerNames = persons
//     .filter(person => person.city === 'New York')
//     .map(person => person.name);

const newYorkerNames = persons.filter(person => {
    return person.city === 'New York'
}).map(function (person) {
    return person.name
});
console.log(newYorkerNames);
