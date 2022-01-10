import { InputType, Field } from "type-graphql";

@InputType()
export class CommonField {
  @Field({ nullable: true, description: "Day of the week, .e.g, 1" })
  day?: number;

  @Field({ description: "Number of month .e.g: 2" })
  month: number;

  @Field({ description: "Year .e.g: 2022" })
  year: number;
}
