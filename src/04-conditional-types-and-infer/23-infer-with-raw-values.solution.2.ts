import { Equal, Expect } from "../helpers/type-utils";

type NewDataValue<T> = T extends { data: infer TInferredData }
  ? TInferredData
  : never;

type tests = [
  Expect<Equal<NewDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<NewDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      NewDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<NewDataValue<string>, never>>,
];
