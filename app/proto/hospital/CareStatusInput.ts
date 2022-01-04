// Original file: mask/proto/hospitalization.proto


export interface CareStatusInput {
  'day'?: (number);
  'month'?: (number);
  'year'?: (number);
  'region'?: (number);
  '_day'?: "day";
}

export interface CareStatusInput__Output {
  'day'?: (number);
  'month': (number);
  'year': (number);
  'region': (number);
  '_day': "day";
}
