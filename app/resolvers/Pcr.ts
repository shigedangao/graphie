import { PcrCollection } from "../entities/Pcr";
import { Arg, Query, Resolver } from "type-graphql";
import {
  GraphPcrInputDep,
  GraphPcrInputReg,
  GraphPcrInputCountry
} from "./types/pcr-input";
import { PcrInput } from "../proto/pcr/PcrInput";
import { pcrClient } from "../proto";
import { PcrOutput__Output } from "../proto/pcr/PcrOutput";
import { promisify } from "util";

@Resolver()
export class PcrResolver {
  @Query((_returns) => PcrCollection, { nullable: true })
  async getPcrTestMadeByDepartment(
    @Arg('data') arg: GraphPcrInputDep
  ): Promise<PcrCollection> {
    const input: PcrInput = {...arg};

    const handler = promisify(pcrClient.getPcrTestMadeByDepartment).bind(pcrClient);
    const res: PcrOutput__Output = await handler(input);

    const collection = new PcrCollection().from(res);
    return collection;
  }

  @Query((_returns) => PcrCollection, { nullable: true })
  async getPcrTestMadeByRegion(
    @Arg('data') arg: GraphPcrInputReg
  ): Promise<PcrCollection> {
    const input: PcrInput = {...arg};

    const handler = promisify(pcrClient.getPcrTestMadeByRegion).bind(pcrClient);
    const res: PcrOutput__Output = await handler(input);

    const collection = new PcrCollection().from(res);
    return collection;
  }

  @Query((_returns) => PcrCollection, { nullable: true })
  async getPcrTestCountry(
    @Arg('data') arg: GraphPcrInputCountry
  ): Promise<PcrCollection> {
    const input: PcrInput = {...arg};

    const handler = promisify(pcrClient.getPcrTestMadeCountry).bind(pcrClient);
    const res: PcrOutput__Output = await handler(input);

    const collection = new PcrCollection().from(res);
    return collection;
  }
}
