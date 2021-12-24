import { InputType, Field } from "type-graphql";
import { CommonField } from "./common-input";

@InputType()
export class HospitalizationInput extends CommonField {
  @Field()
  region: number;
}
