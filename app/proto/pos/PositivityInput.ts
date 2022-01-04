// Original file: mask/proto/positivity.proto


export interface PositivityInput {
  'day'?: (number);
  'month'?: (number);
  'year'?: (number);
  'department'?: (string);
  '_day'?: "day";
}

export interface PositivityInput__Output {
  'day'?: (number);
  'month': (number);
  'year': (number);
  'department': (string);
  '_day': "day";
}
