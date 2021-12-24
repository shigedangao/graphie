import { Arg, Query, Resolver } from "type-graphql";
import { Positivity, PositivityWeekly } from "../entities/Positivity";
import { GraphPositivityInput } from "./types/positivity-input";
import { PositivityInput } from "../proto/pos/PositivityInput";
import { PositivityCollection__Output } from "../proto/pos/PositivityCollection";
import { posClient } from "../proto";
import { grpcCallback } from "../utils";
import { PositivityDayResult__Output } from "../proto/pos/PositivityDayResult";
import { PositivityWeekCollection__Output } from "../proto/pos/PositivityWeekCollection";

@Resolver()
export class PositivityResolver {
  @Query((_returns) => [Positivity], { nullable: true })
  async getPositivityByDepartmentPerDay(
    @Arg('data') args: GraphPositivityInput
  ): Promise<Positivity[]> {
    const payload: PositivityInput = {...args};
    const res: PositivityCollection__Output = await new Promise((resolve, reject) =>
      posClient.getPositivityByDepartmentPerDay(payload, (err, res) => grpcCallback<PositivityCollection__Output>(err, res, resolve, reject))
    );

    const pos = res.rates?.map((p: PositivityDayResult__Output) => {
      let r = new Positivity()
      return r.from(p);
    });

    return pos;
  }

  @Query((_returns) => PositivityWeekly, { nullable: true })
  async getPositivityByDepartmentPerWeek(
    @Arg('data') args: GraphPositivityInput
  ): Promise<PositivityWeekly> {
    const payload: PositivityInput = {...args};
    const res: PositivityWeekCollection__Output = await new Promise((resolve, reject) =>
      posClient.getPositivityByDepartmentPerWeek(payload, (err, res) => grpcCallback<PositivityWeekCollection__Output>(err, res, resolve, reject))
    );

    let pos = new PositivityWeekly();
    pos = pos.from(res);

    return pos;
  }
}
