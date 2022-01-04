import { HospitalCollection } from "../entities/Hospitalization";
import { Resolver, Query, Arg } from "type-graphql";
import { HospitalizationInput } from "./types/hospitalization-input";
import { hospitalizationClient } from "../proto";
import { CareStatusInput } from "../proto/hospital/CareStatusInput";
import { grpcCallback } from "../utils";
import { CareStatusOutput__Output } from "../proto/hospital/CareStatusOutput";

@Resolver()
export class HospitalizationResolver {
  @Query((_returns) => HospitalCollection, { nullable: true })
  async getStatusByRegion(
    @Arg('data') arg: HospitalizationInput
  ): Promise<HospitalCollection> {
    const payload: CareStatusInput = {...arg};
    const res: CareStatusOutput__Output = await new Promise((resolve, reject) =>
      hospitalizationClient.getHospitalStatusByRegion(
        payload,
        (err, res) => grpcCallback<CareStatusOutput__Output>(err, res, resolve, reject)
      )
    );

    const hospitalCollection = new HospitalCollection().from(res);
    return hospitalCollection;
  }
}
