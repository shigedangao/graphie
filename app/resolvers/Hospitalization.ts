import { HospitalCollection, LevelCollection } from "../entities/Hospitalization";
import { Resolver, Query, Arg } from "type-graphql";
import { HospitalizationInput, LevelInput as LI } from "./types/hospitalization-input";
import { hospitalizationClient, levelClient } from "../proto";
import { CareStatusInput } from "../proto/hospital/CareStatusInput";
import { grpcCallback } from "../utils";
import { CareStatusOutput__Output } from "../proto/hospital/CareStatusOutput";
import { LevelInput } from "../proto/hospital/LevelInput";
import { LevelOutput__Output } from "../proto/hospital/LevelOutput";

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

  @Query((_returns) => LevelCollection, { nullable: true })
  async getHospitalLevelByDepartment(
    @Arg('data') arg: LI
  ): Promise<LevelCollection> {
    const payload: LevelInput = {...arg};
    const res: LevelOutput__Output = await new Promise((resolve, reject) =>
      levelClient.getHospitalLevelByDepartment(
        payload,
        (err, res) => grpcCallback<LevelOutput__Output>(err, res, resolve, reject)
      )
    );

    const levelCollection = new LevelCollection().from(res);
    return levelCollection;
  }
}
