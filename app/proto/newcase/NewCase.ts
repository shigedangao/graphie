// Original file: proto/newcase.proto

import type { Long } from '@grpc/proto-loader';

export interface NewCase {
  'date'?: (string);
  'newEntryHospital'?: (number | string | Long);
  'newEntryIcu'?: (number | string | Long);
  'death'?: (number | string | Long);
  'healed'?: (number | string | Long);
}

export interface NewCase__Output {
  'date': (string);
  'newEntryHospital': (number);
  'newEntryIcu': (number);
  'death': (number);
  'healed': (number);
}
