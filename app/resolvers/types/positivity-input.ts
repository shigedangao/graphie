import { InputType, Field } from "type-graphql";
import { CommonField } from "./common-input";

@InputType()
export class GraphPositivityInput extends CommonField {
  @Field()
  department: string;
}
