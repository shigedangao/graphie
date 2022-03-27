import { InputType, Field } from "type-graphql";
import { CommonField } from "./common-input";

@InputType()
export class HospitalizationInput {
  @Field({ description: "Date" })
  date: CommonField;

  @Field({ description: "Region code .e.g: 11" })
  region: number;
}

@InputType()
export class LevelInput {
  @Field({ description: "Date" })
  date: CommonField;

  @Field({ description: "Department .e.g: '77'" })
  department: string;
}
