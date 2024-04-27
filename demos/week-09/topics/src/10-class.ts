import { IPerson } from "./09-interface";

enum Party {
    ABC = "ABC",
    BCD = "BCD",
}

class Person implements IPerson /*, ICanWalk, ICanTalk */ {
    public name: string;
    age: number; // default is public
    private votedFor: string;

    constructor(name: string, age: number, votedFor: string) {
        this.name = name;
        this.age = age;
        this.votedFor = votedFor;
    }

    celebrateBirthday() {
        ++this.age;
    }
}

// you can have class extensions
// explore...

const john = new Person("John", 32, Party.ABC);
console.log(john.name); // ok -> name property is public
// console.log(john.votedFor); // error -> votedFor is private

export {};
