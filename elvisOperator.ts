/*
- what is elvis operator
- write a common use case
*/

// also called optional chaining operator

export interface UserInterface {
  id: string;
  name: string;
}

const getName = (user?: UserInterface): string => {
  return user?.name ?? "Not set";
};
