import { InputType, Field } from "type-graphql";
import { CommonField } from "./common-input";

@InputType()
export class NewCaseInput {
  @Field({ description: "Date" })
  date: CommonField;

  @Field({ description: "Number of department in string format .e.g: 77" })
  department: string;
}
