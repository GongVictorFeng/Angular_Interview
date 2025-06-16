/*
- what is an enum? write an example. why are they so good?
*/

// define constants that we can reuse everywhere

export enum StatusEnum {
  ACTIVE = "active",
  DRAFT = "draft",
  ARCHIVED = "archived",
}

const isActive = (status: StatusEnum): boolean => {
  return status === StatusEnum.ACTIVE;
};

const user = {
  status: "active",
};

isActive(user.status as StatusEnum);
