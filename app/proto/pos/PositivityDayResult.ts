// Original file: mask/proto/positivity.proto

import type { Long } from '@grpc/proto-loader';

export interface PositivityDayResult {
  'department'?: (string);
  'day'?: (string);
  'populationReference'?: (number | string | Long);
  'pcrPositive'?: (number | string | Long);
  'infectionRate'?: (number | string);
}

export interface PositivityDayResult__Output {
  'department': (string);
  'day': (string);
  'populationReference': (number);
  'pcrPositive': (number);
  'infectionRate': (number);
}
