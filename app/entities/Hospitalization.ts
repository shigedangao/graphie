import { Field, ObjectType } from "type-graphql";
import { From } from ".";
import { CareStatusResult__Output } from "../proto/hospital/CareStatusResult";
import { CareStatusOutput__Output } from "../proto/hospital/CareStatusOutput";

@ObjectType({ description: 'Detailed view of covid cases in a hospital' })
export class Hospital implements From<CareStatusResult__Output, Hospital> {
  @Field()
  region: number;

  @Field()
  age: number;

  @Field()
  hospitalization: number;

  @Field()
  icu: number;

  @Field()
  healed: number;

  @Field()
  death: number;

  @Field()
  different_care_services?: number;

  @Field()
  conventional_care?: number;

  @Field()
  other_care_district?: number;

  @Field()
  day: string;

  from(input: CareStatusResult__Output): Hospital {
    let self = new Hospital();
    self.region = input.region;
    self.age = input.age;
    self.hospitalization = input.hospitalization;
    self.icu = input.icu;
    self.healed = input.healed;
    self.death = input.death;
    self.different_care_services = input.differentCareServices;
    self.conventional_care = input.conventionalCare;
    self.other_care_district = input.otherCareDistrict;
    self.day = input.day;

    return self;
  }
}

@ObjectType({ description: "Collection of hospital's data "})
export class HospitalCollection implements From<CareStatusOutput__Output, HospitalCollection> {
  @Field(type => [Hospital])
  cases: Hospital[];

  from(input: CareStatusOutput__Output): HospitalCollection {
    const self = new HospitalCollection();
    const cases = input.cases.map(h => new Hospital().from(h));

    self.cases = cases;

    return self;
  }
}
