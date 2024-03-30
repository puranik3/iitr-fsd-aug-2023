function foo(add) {
    console.log(add(12, 13));
}

function sum(x, y) {
    return x + y;
}

foo(sum); // add = sum

function greet(person, greeter) {
    const title = greeter(person);
    console.log(`Good morning, ${title} ${person.name}. How is the weather in ${person.city}`);
}

function greetEnglish(person) {
    return person.gender === 'female' ? 'Ms.' : 'Mr.';
}

const john = {
    name: 'John',
    city: 'New York',
    gender: 'male'
};

greet(john, greetEnglish);

greet({
    name: 'Jane',
    city: 'Paris',
    gender: 'female'
}, function (person) {
    return person.gender === 'female' ? 'Madamoiselle' : 'Monsieur';
});