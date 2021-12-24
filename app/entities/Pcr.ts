import { Field, ObjectType } from "type-graphql";
import { From } from ".";
import { PcrResult__Output } from "../proto/pcr/PcrResult";
import { PcrResult } from "../proto/pcr/PcrResult";

@ObjectType({ description: 'Pcr case result' })
export class Pcr implements From<PcrResult__Output, Pcr> {
  @Field()
  day: string;

  @Field()
  age: number;

  @Field({ nullable: true })
  region?: number;

  @Field({ nullable: true })
  populationByRegion?: number;

  @Field({ nullable: true })
  positivePcrTestMale?: number;

  @Field({ nullable: true })
  positivePcrTestFemale?: number;

  @Field({ nullable: true })
  totalPositivePcrTest?: number;

  @Field({ nullable: true })
  pcrTestMale?: number;

  @Field({ nullable: true })
  pcrTestFemale?: number;

  @Field({ nullable: true })
  totalPcrTestDone?: number;

  @Field({ nullable: true })
  department?: string;

  @Field({ nullable: true })
  populationByDepartment?: number;

  from(input: PcrResult__Output): Pcr {
      let self = new Pcr();
      self.day = input.day;
      self.age = input.age;
      self.region = input.region;
      self.populationByRegion = input.populationByRegion;
      self.positivePcrTestMale = input.positivePcrTestMale;
      self.positivePcrTestFemale = input.positivePcrTestFemale;
      self.totalPositivePcrTest = input.totalPositivePcrTest;
      self.pcrTestMale = input.pcrTestMale;
      self.pcrTestFemale = input.pcrTestFemale;
      self.totalPcrTestDone = input.totalPcrTestDone;
      self.department = input.department;
      self.populationByDepartment = input.populationByDepartment;

      return self;
  }
}
