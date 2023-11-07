import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type GetIdKeys<T> = T extends `${any}Id` | `id${any}` ? T : never;

type OnlyIdKeys<T> = { [K in GetIdKeys<keyof T>]: T[K] };

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
