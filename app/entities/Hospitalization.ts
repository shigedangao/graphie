import { Field, ObjectType } from "type-graphql";
import { From } from ".";
import { CareStatusPayload__Output } from "../proto/hospital/CareStatusPayload";

@ObjectType({ description: 'Hospitalization model' })
export class Hospitalization implements From<CareStatusPayload__Output, Hospitalization> {
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

  from(input: CareStatusPayload__Output): Hospitalization {
    let self = new Hospitalization();
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
