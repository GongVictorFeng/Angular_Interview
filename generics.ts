/*
- what are generics in Typescript
*/

// generics enable you to create reusable components that work with multiple types while preserving type safety. Think of them as 'type parameters' for your code

const addId = <T>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

const user = {
  name: "Jack",
};

const result = addId(user);

// Generic function to get the first element of an array
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

// Usage examples:
const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers); // Type inferred: number | undefined
console.log(firstNum); // 1

const strings = ["apple", "banana", "cherry"];
const firstString = getFirstElement<string>(strings); // Explicit type
console.log(firstString); // "apple"

const empty: number[] = [];
const firstEmpty = getFirstElement(empty);
console.log(firstEmpty); // undefined
