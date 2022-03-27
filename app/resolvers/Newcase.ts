import { Resolver, Query, Arg } from "type-graphql";
import { NewCaseInput } from "./types/cases-input";
import { CaseCollection } from "../entities/Case";
import { CaseInput } from "../proto/newcase/CaseInput";
import { newcaseClient } from "../proto";
import { NewCases__Output } from "../proto/newcase/NewCases";
import { promisify } from "util";

@Resolver()
export class NewcaseResolver {
  @Query((_returns) => CaseCollection, { nullable: true })
  async getNewCaseByDepartment(
    @Arg('data') arg: NewCaseInput
  ): Promise<CaseCollection> {
    const input: CaseInput = {...arg};

    const handler = promisify(newcaseClient.getNewCaseByDepartment).bind(newcaseClient);
    const res: NewCases__Output = await handler(input);

    const caseCollection = new CaseCollection().from(res);
    return caseCollection;
  }
}
