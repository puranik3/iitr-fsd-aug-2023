type NS = number | string;

let chequeAmount: NS = 20000;
chequeAmount = "Thirty Thousand";
// chequeAmount = true; // error

let chequeAmounts: NS[] = [];
chequeAmounts.push(1000);
chequeAmounts.push("Twenty thousand");
// chequeAmounts.push(true); // error

let chequeAmounts2: number | string[] = [];
// chequeAmounts2.push(2000); // error
chequeAmounts2.push("One thousand");
chequeAmounts2 = 3000; // ok

export {};
