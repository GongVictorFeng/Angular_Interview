// What is type assertion?
// How to fix this code

// const getItem = (item: number | undefined) => {
//     return item.toString();
// }

// Type assertion: guide TypeScript to take correct type

// solutions

const getItem1 = (item: number | undefined) => {
  return (item as number).toString();
}; // Bad Practice

const getItem2 = (item: number | undefined) => {
  if (!item) return null;
  return item.toString();
};
