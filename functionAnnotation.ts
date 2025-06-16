/*
- create UserInterface with id, name, age and getMessage function which returns string.
- create ProfileInterface with name, profileUrl, isActive.
- create function which transforms UserInterface to ProfileInterface
- The profileUrl is `/profile/${name}`
- Add optional parameter isActive. Profile must be active if parameter is not provided
*/

export interface UserInterface {
  id: string;
  name: string;
  age: number;
  getMessage(): string;
}

export interface ProfileInterface {
  name: string;
  profileUrl: string;
  isActive: boolean;
}

export function transformsUserToProfile(
  user: UserInterface,
  isActive: boolean = true
): ProfileInterface {
  return {
    name: user.name,
    profileUrl: `/profile/${user.name}`,
    isActive,
  };
}

transformsUserToProfile({
  id: "1",
  name: "foo",
  age: 30,
  getMessage: () => "foo",
});
