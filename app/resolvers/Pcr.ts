import { Pcr } from "../entities/Pcr";
import { Arg, Query, Resolver } from "type-graphql";
import { GraphPcrInputDep } from "./types/pcr-input";
import { PcrInputDepartment } from "../proto/pcr/PcrInputDepartment";
import { pcrDepClient } from "../proto";
import { grpcCallback } from "../utils";
import { PcrOutput__Output } from "../proto/pcr/PcrOutput";
import { PcrResult__Output } from "../proto/pcr/PcrResult";

@Resolver()
export class PcrDepartmentResolver {
  @Query((_returns) => [Pcr], { nullable: true })
  async getPcrTestMadeByDepartment(
    @Arg('data') arg: GraphPcrInputDep
  ): Promise<Pcr[]> {
    const payload: PcrInputDepartment = {...arg};
    const res: PcrOutput__Output = await new Promise((resolve, reject) =>
      pcrDepClient.getPcrTestMadeByDepartment(payload, (err, res) => grpcCallback<PcrOutput__Output>(err, res, resolve, reject))
    );

    const pcr = res.pcr?.map((p: PcrResult__Output) => {
      let pcr = new Pcr();
      return pcr.from(p);
    })

    return pcr;
  }
}
