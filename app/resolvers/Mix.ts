import { MixCollection } from "../entities/Mix";
import { Resolver, Query, Arg } from "type-graphql";
import { MixInput } from "./types/mix-input";
import { MixOutput__Output } from "../proto/mix/MixOutput";
import { mixClient } from "../proto";
import { grpcCallback } from "../utils";

@Resolver()
export class MixResolver {
  @Query((_returns) => MixCollection, { nullable: true })
  async getGlobalCovidDataByDate(
    @Arg('data') arg: MixInput
  ): Promise<MixCollection> {
    const input: MixInput = {...arg};
    const res: MixOutput__Output = await new Promise((resolve, reject) =>
      mixClient.getGlobalCovidDataByDate(
        input,
        (err, res) => grpcCallback<MixOutput__Output>(err, res, resolve, reject)
      )
    );

    const collection = new MixCollection().from(res);
    return collection;
  }
}
