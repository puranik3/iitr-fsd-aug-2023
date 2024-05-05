const range = (min: number, max: number) => {
    const result = [];

    for (let i = min; i <= max; ++i) {
        result.push(i);
    }

    return result;
};

export { range };
