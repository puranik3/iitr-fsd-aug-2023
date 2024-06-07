var Party;
(function (Party) {
    Party["ABC"] = "ABC";
    Party["BCD"] = "BCD";
})(Party || (Party = {}));
class Person {
    constructor(name, age, votedFor) {
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
export {};
