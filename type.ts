/*
- how to create a custom type and when does it make sense
*/

// use custom type to bring clarity and readability to our code or we use them as a result of some type change

export type ID = string;

const id: ID = "F88880715";

export interface UserInterface {
  id: string;
  name: string;
  surname: string;
  age: number;
}

export type UserFullnameType = Pick<UserInterface, "name" | "surname">;
export type UserPost = Omit<UserInterface, "id">;
