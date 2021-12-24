import { InputType, Field } from "type-graphql";
import { CommonField } from "./common-input";

@InputType()
export class GraphPcrInputDep extends CommonField {
  @Field()
  department: string;
}

@InputType()
export class GraphPcrInputReg extends CommonField {
  @Field()
  region: number;
}
