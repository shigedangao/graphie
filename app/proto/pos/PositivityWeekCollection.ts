// Original file: proto/positivity.proto

import type { PositivityDayResult as _pos_PositivityDayResult, PositivityDayResult__Output as _pos_PositivityDayResult__Output } from '../pos/PositivityDayResult';

export interface PositivityWeekCollection {
  'rates'?: (_pos_PositivityDayResult)[];
  'weekInfectionRate'?: (number | string);
}

export interface PositivityWeekCollection__Output {
  'rates': (_pos_PositivityDayResult__Output)[];
  'weekInfectionRate': (number);
}