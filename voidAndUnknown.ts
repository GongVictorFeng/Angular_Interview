// What is void type? Write an example
// Typically we use it just in a single case when function does not return anything

const doSomething = (): void => {
  console.log("do something");
};

// What is unknown? Write an example
let vAny: any = 10;
let vUnknow: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknow;
// let s2: string = vUnknow as string;

console.log(vAny.foo());
console.log(vUnknow.foo());

// there is not error in s1, typeScript is completely disable if the any is used
// unknown is a data type which is better than any , after unknown is used, it must be specify later what exactly the data type it is using type assertion
