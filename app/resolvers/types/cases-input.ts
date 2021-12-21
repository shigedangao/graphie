import { InputType, Field } from "type-graphql";

@InputType()
export class NewCaseInput {
  @Field()
  department: string;

  @Field({ nullable: true })
  day?: string;

  @Field()
  month: string;

  @Field()
  year: number;
}
