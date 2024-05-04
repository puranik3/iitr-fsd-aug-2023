const random = (min: number, max: number) =>
    Math.floor((max - min + 1) * Math.random() + min);

export { random };
