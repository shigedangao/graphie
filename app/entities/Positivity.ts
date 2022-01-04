import { Field, ObjectType } from "type-graphql";
import { From } from ".";
import { PositivityDayResult__Output } from "../proto/pos/PositivityDayResult";
import { PositivityWeekCollection__Output } from "../proto/pos/PositivityWeekCollection";

@ObjectType({ description: "Positivity case per day" })
export class Positivity implements From<PositivityDayResult__Output, Positivity> {
  @Field()
  department: string;

  @Field()
  day: string;

  @Field()
  populationReference: number;

  @Field()
  pcrPositive: number;

  @Field()
  infectionRate: number;

  from(input: PositivityDayResult__Output): Positivity {
    let self = new Positivity();
    self.department = input.department;
    self.day = input.day;
    self.populationReference = input.populationReference;
    self.pcrPositive = input.pcrPositive;
    self.infectionRate = input.infectionRate;

    return self;
  }
}

@ObjectType({ description: "Positivity cases weekly" })
export class PositivityWeekly implements From<PositivityWeekCollection__Output, PositivityWeekly> {
  @Field(type => [Positivity])
  rates: Positivity[]

  @Field()
  weekInfectionRate: number;

  from(input: PositivityWeekCollection__Output): PositivityWeekly {
    const self = new PositivityWeekly();
    const rates = input.rates.map(p => new Positivity().from(p));

    self.rates = rates;
    self.weekInfectionRate = input.weekInfectionRate;

    return self
  }
}
