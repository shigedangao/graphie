// Original file: proto/pcr.proto


export interface PcrInputRegion {
  'day'?: (number);
  'month'?: (number);
  'year'?: (number);
  'region'?: (number);
  '_day'?: "day";
}

export interface PcrInputRegion__Output {
  'day'?: (number);
  'month': (number);
  'year': (number);
  'region': (number);
  '_day': "day";
}
