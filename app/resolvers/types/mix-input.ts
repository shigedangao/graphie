import { InputType, Field } from "type-graphql";
import { CommonField } from "./common-input";

@InputType()
export class MixInput {
    @Field({ description: "Date" })
    date: CommonField;  
}
