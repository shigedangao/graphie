import { Arg, Query, Resolver } from "type-graphql";
import { Positivity, PositivityWeekly } from "../entities/Positivity";
import { GraphPositivityInput } from "./types/positivity-input";
import { PositivityInput } from "../proto/pos/PositivityInput";
import { PositivityCollection__Output } from "../proto/pos/PositivityCollection";
import { posClient } from "../proto";
import { PositivityDayResult__Output } from "../proto/pos/PositivityDayResult";
import { PositivityWeekCollection__Output } from "../proto/pos/PositivityWeekCollection";
import { promisify } from "util";

@Resolver()
export class PositivityResolver {
  @Query((_returns) => [Positivity], { nullable: true })
  async getPositivityByDepartmentPerDay(
    @Arg('data') args: GraphPositivityInput
  ): Promise<Positivity[]> {
    const input: PositivityInput = {...args};

    const handler = promisify(posClient.getPositivityByDepartmentPerDay).bind(posClient);
    const res: PositivityCollection__Output = await handler(input);

    const pos = res.rates?.map((p: PositivityDayResult__Output) => new Positivity().from(p));

    return pos;
  }

  @Query((_returns) => PositivityWeekly, { nullable: true })
  async getPositivityByDepartmentPerWeek(
    @Arg('data') args: GraphPositivityInput
  ): Promise<PositivityWeekly> {
    const input: PositivityInput = {...args};

    const handler = promisify(posClient.getPositivityByDepartmentPerWeek).bind(posClient);
    const res: PositivityWeekCollection__Output = await handler(input);

    let pos = new PositivityWeekly();
    pos = pos.from(res);

    return pos;
  }
}
