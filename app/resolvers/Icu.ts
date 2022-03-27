import { Resolver, Query, Arg } from "type-graphql";
import { IcuInput } from "./types/icu-input";
import { IcuCollection } from "../entities/Icu";
import { IcuInput as ProtoIcuInput } from "../proto/icu/IcuInput";
import { icuClient } from "../proto";
import { IcuOutput__Output } from "../proto/icu/IcuOutput";
import { promisify } from "util";

@Resolver()
export class IcuResolver {
  @Query((_returns) => IcuCollection, { nullable: true })
  async getFranceIcuLevelForNonVaxx(
    @Arg('data') arg: IcuInput
  ): Promise<IcuCollection> {
    const input: ProtoIcuInput = {...arg};

    const handler = promisify(icuClient.getFranceIcuLevelForNonVaxx).bind(icuClient);
    const res: IcuOutput__Output = await handler(input);

    const icuCollection = new IcuCollection().from(res);
    return icuCollection;
  }

  @Query((_returns) => IcuCollection, { nullable: true })
  async getFranceIcuLevelForVaxx(
    @Arg('data') arg: IcuInput
  ): Promise<IcuCollection> {
    const input: ProtoIcuInput = {...arg};

    const handler = promisify(icuClient.getFranceIcuLevelForVaxx).bind(icuClient);
    const res: IcuOutput__Output = await handler(input);

    const icuCollection = new IcuCollection().from(res);
    return icuCollection;
  }
}
