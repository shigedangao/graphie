import { NewCases__Output } from "../proto/newcase/NewCases";
import { Field, ObjectType } from "type-graphql";
import { From } from ".";
import { CaseResult__Output } from "../proto/newcase/CaseResult";

@ObjectType({ description: 'New case in the hospital for a given date' })
export class Case implements From<CaseResult__Output, Case> {
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

  from(input: CaseResult__Output): Case {
    let self = new Case();
    self.date = input.date;
    self.new_entry_hospital = input.newEntryHospital;
    self.new_entry_icu = input.newEntryIcu
    self.death = input.death;
    self.healed = input.healed;

    return self;
  }
}

@ObjectType({ description: 'Collection of covid case in the hospital' })
export class CaseCollection implements From<NewCases__Output, CaseCollection> {
  @Field(type => [Case])
  cases: Case[]

  from(input: NewCases__Output): CaseCollection {
    const self = new CaseCollection();

    const cases = input.cases.map(c => new Case().from(c));
    self.cases = cases;

    return self;
  }
}
