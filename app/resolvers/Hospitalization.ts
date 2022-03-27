import { HospitalCollection, LevelCollection } from "../entities/Hospitalization";
import { Resolver, Query, Arg } from "type-graphql";
import { HospitalizationInput, LevelInput as LI } from "./types/hospitalization-input";
import { hospitalizationClient, levelClient } from "../proto";
import { CareStatusInput } from "../proto/hospital/CareStatusInput";
import { CareStatusOutput__Output } from "../proto/hospital/CareStatusOutput";
import { LevelInput } from "../proto/hospital/LevelInput";
import { LevelOutput__Output } from "../proto/hospital/LevelOutput";
import { promisify } from "util";

@Resolver()
export class HospitalizationResolver {
  @Query((_returns) => HospitalCollection, { nullable: true })
  async getStatusByRegion(
    @Arg('data') arg: HospitalizationInput
  ): Promise<HospitalCollection> {
    const input: CareStatusInput = {...arg};

    const handler = promisify(hospitalizationClient.getHospitalStatusByRegion).bind(hospitalizationClient);
    const res: CareStatusOutput__Output = await handler(input);

    const hospitalCollection = new HospitalCollection().from(res);
    return hospitalCollection;
  }

  @Query((_returns) => LevelCollection, { nullable: true })
  async getHospitalLevelByDepartment(
    @Arg('data') arg: LI
  ): Promise<LevelCollection> {
    const input: LevelInput = {...arg};

    const handler = promisify(levelClient.getHospitalLevelByDepartment).bind(levelClient);
    const res: LevelOutput__Output = await handler(input);

    const levelCollection = new LevelCollection().from(res);
    return levelCollection;
  }
}
