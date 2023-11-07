import { S } from "ts-toolbelt";
import { Equal, Expect } from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";



type ExtractPathParams<T extends string> = {
  [K in S.Split<T, "/">[number] as K extends `:${infer Id}` ? `${Id}` : never]  : string
};

type Test = ExtractPathParams<UserOrganisationPath>

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
