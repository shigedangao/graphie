import { Hospitalization } from "../entities/Hospitalization";
import { Resolver, Query, Arg } from "type-graphql";
import { HospitalizationInput } from "./types/hospitalization-input";
import { hospitalizationGuideClient } from "../server";
import { CareStatusInput } from "../proto/hospital/CareStatusInput";
import { grpcCallback } from "../utils";
import { CareStatusOutput__Output } from "../proto/hospital/CareStatusOutput";
import { CareStatusPayload__Output } from "../proto/hospital/CareStatusPayload";
import { isNil } from "ramda";

@Resolver()
export class HospitalizationResolver {
  @Query((_returns) => [Hospitalization], { nullable: true })
  async getStatusByRegion(
    @Arg('data') { }: HospitalizationInput
  ): Promise<Hospitalization[]> {
    const payload: CareStatusInput = {
      day: "01",
      month: "12",
      year: 2021,
      region: 94
    };

    const res: CareStatusOutput__Output = await new Promise((resolve, reject) =>
      hospitalizationGuideClient.getStatusByRegion(payload, (err, res) => grpcCallback<CareStatusOutput__Output>(err, res, resolve, reject)));

    const cases = res.cases?.map((c: CareStatusPayload__Output) => {
      let h = new Hospitalization();
      return h.from(c);
    });

    if (isNil(cases)) {
      return [];
    }

    return cases;
  }
}
