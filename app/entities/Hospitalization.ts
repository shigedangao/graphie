import { Field, ObjectType } from "type-graphql";
import { From } from ".";
import { CareStatusResult__Output } from "../proto/hospital/CareStatusResult";
import { CareStatusOutput__Output } from "../proto/hospital/CareStatusOutput";
import { LevelResult__Output } from "../proto/hospital/LevelResult";
import { LevelOutput__Output } from "../proto/hospital/LevelOutput";

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
  backHome: number;

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
    self.backHome = input.backHome;
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

@ObjectType({ description: "Level in the hospital per department, per age and per sex" })
export class Level implements From<LevelResult__Output, Level> {
  @Field()
  department: string;

  @Field()
  sex: string;

  @Field()
  date: string;

  @Field()
  hospitalization: number;

  @Field()
  icu: number;

  @Field()
  conventionalCare?: number;

  @Field()
  differentCareServices?: number;

  @Field()
  otherCareServices?: number;

  @Field()
  backHome: number;

  @Field()
  death: number;

  from(input: LevelResult__Output): Level {
      const self = new Level();
      self.department = input.department;
      self.sex = input.sex;
      self.date = input.date;
      self.hospitalization = input.hospitalization;
      self.icu = input.icu;
      self.conventionalCare = input.conventionalCare;
      self.differentCareServices = input.differentCareServices;
      self.otherCareServices = input.otherCareServices;
      self.backHome = input.backHome;
      self.death = input.death;

      return self;
  }
}

@ObjectType({ description: "Collection of hospital data per department, per sex and per age" })
export class LevelCollection implements From<LevelOutput__Output, LevelCollection> {
  @Field(type => [Level])
  cases: Level[];

  from(input: LevelOutput__Output): LevelCollection {
    const self = new LevelCollection();
    self.cases = input.data.map(l => new Level().from(l));

    return self;
  }
}
