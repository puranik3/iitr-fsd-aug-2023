interface IPerson {
    name: string;
    age: number;
    celebrateBirthday: () => void; // Doesn't matter if we return something or not
}

// You can extend interfaces
// try it out...
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces

const john: IPerson = {
    name: "John",
    age: 32,
    celebrateBirthday() {
        ++this.age;
        return 0;
    },
};

export { IPerson };
