import { PcrCollection } from "../entities/Pcr";
import { Arg, Query, Resolver } from "type-graphql";
import {
  GraphPcrInputDep,
  GraphPcrInputReg,
  GraphPcrInputCountry
} from "./types/pcr-input";
import { PcrInputDepartment } from "../proto/pcr/PcrInputDepartment";
import { pcrClient } from "../proto";
import { grpcCallback } from "../utils";
import { PcrOutput__Output } from "../proto/pcr/PcrOutput";
import { PcrInputRegion } from "../proto/pcr/PcrInputRegion";

@Resolver()
export class PcrResolver {
  @Query((_returns) => PcrCollection, { nullable: true })
  async getPcrTestMadeByDepartment(
    @Arg('data') arg: GraphPcrInputDep
  ): Promise<PcrCollection> {
    const payload: PcrInputDepartment = {...arg};
    const res: PcrOutput__Output = await new Promise((resolve, reject) =>
      pcrClient.getPcrTestMadeByDepartment(
        payload,
        (err, res) => grpcCallback<PcrOutput__Output>(err, res, resolve, reject)
      )
    );

    const collection = new PcrCollection().from(res);
    return collection;
  }

  @Query((_returns) => PcrCollection, { nullable: true })
  async getPcrTestMadeByRegion(
    @Arg('data') arg: GraphPcrInputReg
  ): Promise<PcrCollection> {
    const payload: PcrInputRegion = {...arg};
    const res: PcrOutput__Output = await new Promise((resolve, reject) =>
      pcrClient.getPcrTestMadeByRegion(
        payload,
        (err, res) => grpcCallback<PcrOutput__Output>(err, res, resolve, reject)
      )
    );

    const collection = new PcrCollection().from(res);
    return collection;
  }

  @Query((_returns) => PcrCollection, { nullable: true })
  async getPcrTestCountry(
    @Arg('data') arg: GraphPcrInputCountry
  ): Promise<PcrCollection> {
    const payload: PcrInputRegion = {...arg};
    const res: PcrOutput__Output = await new Promise((resolve, reject) =>
      pcrClient.getPcrTestMadeCountry(
        payload,
        (err, res) => grpcCallback<PcrOutput__Output>(err, res, resolve, reject)
      )
    );

    const collection = new PcrCollection().from(res);
    return collection;
  }
}
