// Original file: mask/proto/newcase.proto


export interface CaseInput {
  'department'?: (string);
  'day'?: (number);
  'month'?: (number);
  'year'?: (number);
  '_day'?: "day";
}

export interface CaseInput__Output {
  'department': (string);
  'day'?: (number);
  'month': (number);
  'year': (number);
  '_day': "day";
}
