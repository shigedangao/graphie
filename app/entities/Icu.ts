import { Field, ObjectType } from "type-graphql";
import { From } from ".";
import { IcuOutput__Output } from "../proto/icu/IcuOutput";
import { IcuResult__Output } from "../proto/icu/IcuResult";

@ObjectType({ description: "Data in ICU for a specific date" })
export class Icu implements From<IcuResult__Output, Icu> {
  @Field()
  day: string;

  @Field()
  rate: number;

  from(input: IcuResult__Output): Icu {
    const self = new Icu();
    self.day = input.day;
    self.rate = input.rate;

    return self;
  }
}

@ObjectType({ description: "Collection of data in ICU" })
export class IcuCollection implements From<IcuOutput__Output, IcuCollection> {
  @Field(type => [Icu])
  data: Icu[]

  from(input: IcuOutput__Output): IcuCollection {
    const self = new IcuCollection();

    const res = input.data.map(i => {
      return new Icu().from(i);
    })

    self.data = res;

    return self;
  }
}
