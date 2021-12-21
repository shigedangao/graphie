import { Resolver, Query, Arg } from "type-graphql";
import { NewCaseInput } from "./types/cases-input";
import { Case } from "../entities/Case";
import { CaseInput } from "../proto/newcase/CaseInput";
import { newcaseClient } from "../server";
import { grpcCallback } from "../utils";
import { NewCases__Output } from "../proto/newcase/NewCases";
import { NewCase__Output } from "../proto/newcase/NewCase";
import { isNil } from "ramda";

@Resolver()
export class NewcaseResolver {
  @Query((_returns) => [Case], { nullable: true })
  async getNewCaseByDepartment(
    @Arg('data') arg: NewCaseInput
  ): Promise<Case[]> {
    const payload: CaseInput = {...arg};
    const res: NewCases__Output = await new Promise((resolve, reject) =>
      newcaseClient.getNewCaseByDepartment(payload, (err, res) => grpcCallback<NewCases__Output>(err, res, resolve, reject))
    );

    const cases = res.cases?.map((c: NewCase__Output) => {
      let ca = new Case();
      return ca.from(c);
    });

    if (isNil(cases)) {
      return [];
    }

    return cases;
  }
}
