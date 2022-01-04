// Original file: mask/proto/pcr.proto


export interface PcrInputDepartment {
  'day'?: (number);
  'month'?: (number);
  'year'?: (number);
  'department'?: (string);
  '_day'?: "day";
}

export interface PcrInputDepartment__Output {
  'day'?: (number);
  'month': (number);
  'year': (number);
  'department': (string);
  '_day': "day";
}
