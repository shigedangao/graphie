// Original file: proto/newcase.proto


export interface CaseInput {
  'department'?: (string);
  'day'?: (string);
  'month'?: (string);
  'year'?: (number);
  '_day'?: "day";
}

export interface CaseInput__Output {
  'department': (string);
  'day'?: (string);
  'month': (string);
  'year': (number);
  '_day': "day";
}
