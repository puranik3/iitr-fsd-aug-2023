type Person = {
    readonly name: string; // cannot change the name after assigning it first time
    age: number;
    email?: string; // optional property
};

const john: Person = {
    name: "John",
    age: 32,
};

john.age = 33;
// john.age = 'Thirty four'; // error

john.email = "john@example.com";
// john.name = "Jonathan"; // error

let jane: Person;

jane = {
    name: "Jane",
    age: 28,
};

export {};
