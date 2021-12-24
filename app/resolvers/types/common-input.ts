import { InputType, Field } from "type-graphql";

@InputType()
export class CommonField {
  @Field({ nullable: true })
  day?: number;

  @Field()
  month: number;

  @Field()
  year: number;
}
