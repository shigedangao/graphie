import { InputType, Field } from "type-graphql";
import { CommonField } from "./common-input";

@InputType()
export class NewCaseInput extends CommonField {
  @Field()
  department: string;
}
