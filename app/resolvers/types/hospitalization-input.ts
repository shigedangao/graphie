import { InputType, Field } from "type-graphql";

@InputType()
export class HospitalizationInput {
  @Field({ nullable: true })
  day?: string;

  @Field()
  month: string;

  @Field()
  year: number;

  @Field()
  region: number;
}
