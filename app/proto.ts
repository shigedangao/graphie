import { loadPackageDefinition, credentials } from '@grpc/grpc-js';
import { load } from '@grpc/proto-loader';
import { ProtoGrpcType as ProtoHospital } from './proto/hospitalization';
import { ProtoGrpcType as ProtoNewCase } from './proto/newcase';
import { ProtoGrpcType as ProtoPcr } from './proto/pcr';
import { ProtoGrpcType as ProtoPos } from './proto/positivity';
import fs from 'fs'
import { CareStatusClient } from './proto/hospital/CareStatus';
import { CaseServiceClient } from './proto/newcase/CaseService';
import { PcrServiceDepartmentClient } from './proto/pcr/PcrServiceDepartment';
import { PcrServiceRegionClient } from './proto/pcr/PcrServiceRegion';
import { PositivityRateClient } from './proto/pos/PositivityRate';
import { env } from './env';

// constant
const HOSPITAL_PROTO_PATH = `${__dirname}/../proto/hospitalization.proto`
const NEWCASE_PROTO_PATH = `${__dirname}/../proto/newcase.proto`
const PCR_PROTO_PATH = `${__dirname}/../proto/pcr.proto`
const POSITIVITY_PROTO_PATH = `${__dirname}/../proto/positivity.proto`
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
export let posClient: PositivityRateClient;

/**
 * Load Protobuf
 *
 * @return {Promise}
 */
export const loadProtobuf = async () => {
  const rootCert = fs.readFileSync(`${__dirname}/${env.caCert}`);
  const sslCreds = credentials.createSsl(rootCert);

  const packageDefinition = await load([
    HOSPITAL_PROTO_PATH,
    NEWCASE_PROTO_PATH,
    PCR_PROTO_PATH,
    POSITIVITY_PROTO_PATH
  ], PROTO_OPTION);

  const hospitalProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoHospital;
  const hospital = hospitalProtoDescriptor.hospital;

  const newcaseProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoNewCase;
  const newcase = newcaseProtoDescriptor.newcase;

  const pcrProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoPcr;
  const pcr = pcrProtoDescriptor.pcr;

  const posProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoPos;
  const pos = posProtoDescriptor.pos;

  hospitalizationClient = new hospital.CareStatus(env.hospitalProtoAddr, sslCreds);
  newcaseClient = new newcase.CaseService(env.hospitalProtoAddr, sslCreds);
  pcrDepClient = new pcr.PcrServiceDepartment(env.pcrProtoAddr, sslCreds);
  pcrRegClient = new pcr.PcrServiceRegion(env.pcrProtoAddr, sslCreds);
  posClient = new pos.PositivityRate(env.pcrProtoAddr, sslCreds);
}
