import { Field, ObjectType } from "type-graphql";
import { From } from ".";
import { MixResult__Output } from "../proto/mix/MixResult";
import { MixOutput__Output } from "../proto/mix/MixOutput";

@ObjectType({ description: "Dataset which is mix of SI-DEP, VAC-SI & SI-VIC" })
export class Mix implements From<MixResult__Output, Mix> {
  @Field()
  date: string;

  @Field()
  vaxxStatus: string;

  @Field()
  pcrDone: number;

  @Field()
  pcrSymptom: number;

  @Field()
  pcrPositive: number;

  @Field()
  pcrSymptomPositive: number;

  @Field()
  hospitalEntry: number;

  @Field()
  hospitalEntryPcrPositive: number;

  @Field()
  icuEntry: number;

  @Field()
  icuEntryPcrPositive: number;

  @Field()
  death: number;

  @Field()
  pcrPositiveDealth: number;

  @Field()
  residentPopulation: number;

  from(input: MixResult__Output): Mix {
      const self = new Mix();

      self.date = input.date;
      self.vaxxStatus = input.vaxxStatus;
      self.pcrDone = input.pcrDone;
      self.pcrSymptom = input.pcrSymptom;
      self.pcrPositive = input.pcrPositive;
      self.pcrSymptomPositive = input.pcrSymptomPositive;
      self.hospitalEntry = input.hospitalEntry;
      self.hospitalEntryPcrPositive = input.hospitalEntryPcrPositive;
      self.icuEntry = input.icuEntry;
      self.icuEntryPcrPositive = input.icuEntryPcrPositive;
      self.death = input.death;
      self.pcrPositiveDealth = input.pcrPositiveDeath;
      self.residentPopulation = input.residentPopulation;

      return self;
  }
}

@ObjectType({ description: "Collection of Mix dataset" })
export class MixCollection implements From<MixOutput__Output, MixCollection> {
  @Field(type => [Mix])
  data: Mix[]

  from(input: MixOutput__Output): MixCollection {
    const self = new MixCollection();
    const data = input.data.map(m => new Mix().from(m));
    self.data = data;

    return self;
  }
}
