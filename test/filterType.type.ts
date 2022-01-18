interface Person {
  name: string;
  age: number;
  hobby: string;
  adult: boolean;
}

type P1Type = Pick<Person, "name" | "age">;

const per1: P1Type = {
  name: "sas",
  age: 23,
};

type PickWithCondition<Source, Condition> = {
  [K in keyof Source]: Source[K] extends Condition ? K : never
};

type P2Type = PickWithCondition<Person, string>;

