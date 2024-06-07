// You can extend interfaces
// try it out...
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
const john = {
    name: "John",
    age: 32,
    celebrateBirthday() {
        ++this.age;
        return 0;
    },
};
export {};
