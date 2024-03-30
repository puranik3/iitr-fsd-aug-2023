// What is arguments object. What is Duck-typing? How array methods are used with arguments object
const jonathan = {
    name: 'John',
    age: 32,
    celebrateBirthday: function (by) {
        this.age += by;
    }
}

jonathan.celebrateBirthday(1);

console.log(jonathan);

const jane = {
    name: 'Jane',
    age: 28
};

jonathan.celebrateBirthday.call(jane, 10);

console.log(jane);