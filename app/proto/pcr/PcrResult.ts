// Original file: proto/pcr.proto

import type { Long } from '@grpc/proto-loader';

export interface PcrResult {
  'day'?: (string);
  'age'?: (number | string | Long);
  'region'?: (number | string | Long);
  'populationByRegion'?: (number | string);
  'positivePcrTestMale'?: (number | string | Long);
  'positivePcrTestFemale'?: (number | string | Long);
  'totalPositivePcrTest'?: (number | string | Long);
  'pcrTestMale'?: (number | string | Long);
  'pcrTestFemale'?: (number | string | Long);
  'totalPcrTestDone'?: (number | string | Long);
  'department'?: (string);
  'populationByDepartment'?: (number | string);
  '_region'?: "region";
  '_populationByRegion'?: "populationByRegion";
  '_positivePcrTestMale'?: "positivePcrTestMale";
  '_positivePcrTestFemale'?: "positivePcrTestFemale";
  '_totalPositivePcrTest'?: "totalPositivePcrTest";
  '_pcrTestMale'?: "pcrTestMale";
  '_pcrTestFemale'?: "pcrTestFemale";
  '_totalPcrTestDone'?: "totalPcrTestDone";
  '_department'?: "department";
  '_populationByDepartment'?: "populationByDepartment";
}

export interface PcrResult__Output {
  'day': (string);
  'age': (number);
  'region'?: (number);
  'populationByRegion'?: (number);
  'positivePcrTestMale'?: (number);
  'positivePcrTestFemale'?: (number);
  'totalPositivePcrTest'?: (number);
  'pcrTestMale'?: (number);
  'pcrTestFemale'?: (number);
  'totalPcrTestDone'?: (number);
  'department'?: (string);
  'populationByDepartment'?: (number);
  '_region': "region";
  '_populationByRegion': "populationByRegion";
  '_positivePcrTestMale': "positivePcrTestMale";
  '_positivePcrTestFemale': "positivePcrTestFemale";
  '_totalPositivePcrTest': "totalPositivePcrTest";
  '_pcrTestMale': "pcrTestMale";
  '_pcrTestFemale': "pcrTestFemale";
  '_totalPcrTestDone': "totalPcrTestDone";
  '_department': "department";
  '_populationByDepartment': "populationByDepartment";
}
