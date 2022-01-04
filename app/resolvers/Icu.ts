import { Resolver, Query, Arg } from "type-graphql";
import { IcuInput } from "./types/icu-input";
import { IcuCollection } from "../entities/Icu";
import { IcuInput as ProtoIcuInput } from "../proto/icu/IcuInput";
import { icuClient } from "../proto";
import { grpcCallback } from "../utils";
import { IcuOutput__Output } from "../proto/icu/IcuOutput";

@Resolver()
export class IcuResolver {
  @Query((_returns) => IcuCollection, { nullable: true })
  async getFranceIcuLevelForNonVaxx(
    @Arg('data') arg: IcuInput
  ): Promise<IcuCollection> {
    const input: ProtoIcuInput = {...arg};
    const res: IcuOutput__Output = await new Promise((resolve, reject) =>
      icuClient.getFranceIcuLevelForNonVaxx(
        input,
        (err, res) => grpcCallback<IcuOutput__Output>(err, res, resolve, reject)
      )
    );

    const icuCollection = new IcuCollection().from(res);
    return icuCollection;
  }

  @Query((_returns) => IcuCollection, { nullable: true })
  async getFranceIcuLevelForVaxx(
    @Arg('data') arg: IcuInput
  ): Promise<IcuCollection> {
    const input: ProtoIcuInput = {...arg};
    const res: IcuOutput__Output = await new Promise((resolve, reject) =>
      icuClient.getFranceIcuLevelForVaxx(
        input,
        (err, res) => grpcCallback<IcuOutput__Output>(err, res, resolve, reject)
      )
    );

    const icuCollection = new IcuCollection().from(res);
    return icuCollection;
  }
}
