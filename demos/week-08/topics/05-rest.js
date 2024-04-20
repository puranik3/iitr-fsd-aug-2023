// rest -> ... (overloaded with spread operator -> ...)

// rest -> use case 1 -> while destructuring arrays
const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];
// ... -> gather sall the remaining items into an array
const [first, second, ...restOfDays] = days; // we will process these items here
console.log(restOfDays); // usually this array shall be passed on to some other part of the application

// use case 2 -> during object detstructuring, rest operator is used to gather remaining properties into another object
const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Bengaluru',
        state: 'Karnataka'
    },
    emails: [
        'john@gmail.com',
        'john@example.com'
    ]
};

const {
    name,
    address: {
        city,
        ...remainingAddress
    },
    ...restOfJohnDetails
} = john;
console.log(restOfJohnDetails);
console.log(remainingAddress);