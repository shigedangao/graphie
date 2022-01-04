import { Resolver, Query, Arg } from "type-graphql";
import { NewCaseInput } from "./types/cases-input";
import { CaseCollection } from "../entities/Case";
import { CaseInput } from "../proto/newcase/CaseInput";
import { newcaseClient } from "../proto";
import { grpcCallback } from "../utils";
import { NewCases__Output } from "../proto/newcase/NewCases";

@Resolver()
export class NewcaseResolver {
  @Query((_returns) => CaseCollection, { nullable: true })
  async getNewCaseByDepartment(
    @Arg('data') arg: NewCaseInput
  ): Promise<CaseCollection> {
    const payload: CaseInput = {...arg};
    const res: NewCases__Output = await new Promise((resolve, reject) =>
      newcaseClient.getNewCaseByDepartment(
        payload,
        (err, res) => grpcCallback<NewCases__Output>(err, res, resolve, reject))
    );

    const caseCollection = new CaseCollection().from(res);
    return caseCollection;
  }
}
