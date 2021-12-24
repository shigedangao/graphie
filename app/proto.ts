import { loadPackageDefinition, credentials } from '@grpc/grpc-js';
import { load } from '@grpc/proto-loader';
import { ProtoGrpcType as ProtoHospital } from './proto/hospitalization';
import { ProtoGrpcType as ProtoNewCase } from './proto/newcase';
import { ProtoGrpcType as ProtoPcr } from './proto/pcr';
import fs from 'fs'
import { CareStatusClient } from './proto/hospital/CareStatus';
import { CaseServiceClient } from './proto/newcase/CaseService';
import { PcrServiceDepartmentClient } from './proto/pcr/PcrServiceDepartment';
import { PcrServiceRegionClient } from './proto/pcr/PcrServiceRegion';

// constant
const HOSPITAL_PROTO_PATH = `${__dirname}/../proto/hospitalization.proto`
const NEWCASE_PROTO_PATH = `${__dirname}/../proto/newcase.proto`
const PCR_PROTO_PATH = `${__dirname}/../proto/pcr.proto`
const PROTO_OPTION = {
  longs: Number,
  enums: String,
  defaults: true,
  oneofs: true
};

// global variable
export let hospitalizationClient: CareStatusClient;
export let newcaseClient: CaseServiceClient;
export let pcrDepClient: PcrServiceDepartmentClient;
export let pcrRegClient: PcrServiceRegionClient;

/**
 * Load Protobuf
 *
 * @return {Promise}
 */
export const loadProtobuf = async () => {
  const rootCert = fs.readFileSync(`${__dirname}/../cert/ca-cert.pem`);
  const sslCreds = credentials.createSsl(rootCert);

  const packageDefinition = await load([
    HOSPITAL_PROTO_PATH,
    NEWCASE_PROTO_PATH,
    PCR_PROTO_PATH
  ], PROTO_OPTION);

  const hospitalProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoHospital;
  const hospital = hospitalProtoDescriptor.hospital;

  const newcaseProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoNewCase;
  const newcase = newcaseProtoDescriptor.newcase;

  const pcrProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoPcr;
  const pcr = pcrProtoDescriptor.pcr;

  hospitalizationClient = new hospital.CareStatus('localhost:9000', sslCreds);
  newcaseClient = new newcase.CaseService('localhost:9000', sslCreds);
  pcrDepClient = new pcr.PcrServiceDepartment('localhost:9090', sslCreds);
  pcrRegClient = new pcr.PcrServiceRegion('localhost:9090', sslCreds);
}
