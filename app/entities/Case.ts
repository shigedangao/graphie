import { Field, ObjectType } from "type-graphql";
import { From } from ".";
import { NewCase__Output } from "../proto/newcase/NewCase";

@ObjectType({ description: 'Newcase model' })
export class Case implements From<NewCase__Output, Case> {
  @Field()
  date: string;

  @Field()
  new_entry_hospital: number;

  @Field()
  new_entry_icu: number;

  @Field()
  death: number;

  @Field()
  healed: number;

  from(input: NewCase__Output): Case {
    let self = new Case();
    self.date = input.date;
    self.new_entry_hospital = input.newEntryHospital;
    self.new_entry_icu = input.newEntryIcu
    self.death = input.death;
    self.healed = input.healed;

    return self;
  }
}
