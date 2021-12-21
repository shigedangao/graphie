// Original file: proto/hospitalization.proto

import type { Long } from '@grpc/proto-loader';

export interface CareStatusPayload {
  'region'?: (number | string | Long);
  'age'?: (number | string | Long);
  'hospitalization'?: (number | string | Long);
  'icu'?: (number | string | Long);
  'healed'?: (number | string | Long);
  'death'?: (number | string | Long);
  'differentCareServices'?: (number | string);
  'conventionalCare'?: (number | string);
  'otherCareDistrict'?: (number | string);
  'day'?: (string);
  '_differentCareServices'?: "differentCareServices";
  '_conventionalCare'?: "conventionalCare";
  '_otherCareDistrict'?: "otherCareDistrict";
}

export interface CareStatusPayload__Output {
  'region': (number);
  'age': (number);
  'hospitalization': (number);
  'icu': (number);
  'healed': (number);
  'death': (number);
  'differentCareServices'?: (number);
  'conventionalCare'?: (number);
  'otherCareDistrict'?: (number);
  'day': (string);
  '_differentCareServices': "differentCareServices";
  '_conventionalCare': "conventionalCare";
  '_otherCareDistrict': "otherCareDistrict";
}
