/*
- How to define an array in Typescript. Show all ways
- How to define an array of numbers and strings
*/
const fruits: string[] = ["banana", "apple", "orange"];
const fruits2: Array<string> = ["banana", "apple", "orange"];

const arr: (string | number)[] = ["banana", 1, 2, "apple"]; //bad practice
