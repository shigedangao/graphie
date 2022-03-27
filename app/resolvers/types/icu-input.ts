import { InputType, Field } from "type-graphql";
import { CommonField } from "./common-input";

@InputType()
export class IcuInput {
    @Field({ description: "Date" })
    date: CommonField;  
}
