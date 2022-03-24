import { MixCollection } from "../entities/Mix";
import { Resolver, Query, Arg } from "type-graphql";
import { MixInput } from "./types/mix-input";
import { MixOutput__Output } from "../proto/mix/MixOutput";
import { mixClient } from "../proto";
import { promisify } from "util";

@Resolver()
export class MixResolver {
  @Query((_returns) => MixCollection, { nullable: true })
  async getGlobalCovidDataByDate(
    @Arg('data') arg: MixInput
  ): Promise<MixCollection> {
    const input: MixInput = {...arg};

    const handler = promisify(mixClient.getGlobalCovidDataByDate).bind(mixClient);
    const res: MixOutput__Output = await handler(input);

    const collection = new MixCollection().from(res);
    return collection;
  }
}
