import { InputType, Field } from "type-graphql";
import { CommonField } from "./common-input";

@InputType()
export class GraphPcrInputDep extends CommonField {
  @Field({ description: "Number of department in string format .e.g: 77" })
  department: string;
}

@InputType()
export class GraphPcrInputReg extends CommonField {
  @Field({ description: "Region code .e.g: 11" })
  region: number;
}
