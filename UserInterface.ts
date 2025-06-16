/*
- Define a UserInterface with id: string, name: string, age: number and a method `getMessage`
that return string
- Write an usage example of this interface
*/

export interface UserInterface {
  id: string;
  name: string;
  age: number;
  getMessage(): string;
}

const user: UserInterface = {
  id: "1",
  name: "Foo",
  age: 30,
  getMessage() {
    return `${this.name} is  ${this.age}`;
  },
};

// What is the Interface in TypeScript
// it is a possibility to describe some objects with data that we can reuse everywhere
