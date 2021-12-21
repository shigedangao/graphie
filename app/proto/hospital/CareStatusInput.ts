// Original file: proto/hospitalization.proto


export interface CareStatusInput {
  'day'?: (string);
  'month'?: (string);
  'year'?: (number);
  'region'?: (number);
  '_day'?: "day";
}

export interface CareStatusInput__Output {
  'day'?: (string);
  'month': (string);
  'year': (number);
  'region': (number);
  '_day': "day";
}
