import fs from 'fs'
import { env } from './env';
import { loadPackageDefinition, credentials } from '@grpc/grpc-js';
import { load } from '@grpc/proto-loader';

// Improt proto type
import { ProtoGrpcType as ProtoHospital } from './proto/hospitalization';
import { ProtoGrpcType as ProtoNewCase } from './proto/newcase';
import { ProtoGrpcType as ProtoPcr } from './proto/pcr';
import { ProtoGrpcType as ProtoPos } from './proto/positivity';
import { ProtoGrpcType as ProtoIcu } from './proto/icu';

// Import proto service
import { CareStatusClient } from './proto/hospital/CareStatus';
import { CaseServiceClient } from './proto/newcase/CaseService';
import { PcrServiceDepartmentClient } from './proto/pcr/PcrServiceDepartment';
import { PcrServiceRegionClient } from './proto/pcr/PcrServiceRegion';
import { PositivityRateClient } from './proto/pos/PositivityRate';
import { IcuServiceClient } from './proto/icu/IcuService';

// constant
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
export let icuClient: IcuServiceClient;

/**
 * Load Protobuf
 *
 * @return {Promise}
 */
export const loadProtobuf = async () => {
  const rootCert = fs.readFileSync(`${__dirname}/${env.caCert}`);
  const sslCreds = credentials.createSsl(rootCert);

  // proto path
  const HOSPITAL_PROTO_PATH = `${__dirname}/${env.protoPath}/hospitalization.proto`;
  const NEWCASE_PROTO_PATH = `${__dirname}/${env.protoPath}/newcase.proto`;
  const PCR_PROTO_PATH = `${__dirname}/${env.protoPath}/pcr.proto`;
  const POSITIVITY_PROTO_PATH = `${__dirname}/${env.protoPath}/positivity.proto`;
  const ICU_PROTO_PATH = `${__dirname}/${env.protoPath}/icu.proto`;
  const MIX_PROTO_PATH = `${__dirname}/${env.protoPath}/mix.proto`;

  const packageDefinition = await load([
    HOSPITAL_PROTO_PATH,
    NEWCASE_PROTO_PATH,
    PCR_PROTO_PATH,
    POSITIVITY_PROTO_PATH,
    ICU_PROTO_PATH,
    MIX_PROTO_PATH
  ], PROTO_OPTION);

  const hospitalProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoHospital;
  const newcaseProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoNewCase;
  const pcrProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoPcr;
  const posProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoPos;
  const icuProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoIcu;

  // hospital microservice
  hospitalizationClient = new hospitalProtoDescriptor.hospital.CareStatus(env.hospitalProtoAddr, sslCreds);
  newcaseClient = new newcaseProtoDescriptor.newcase.CaseService(env.hospitalProtoAddr, sslCreds);
  icuClient = new icuProtoDescriptor.icu.IcuService(env.hospitalProtoAddr, sslCreds);

  // pcr microservice
  pcrDepClient = new pcrProtoDescriptor.pcr.PcrServiceDepartment(env.pcrProtoAddr, sslCreds);
  pcrRegClient = new pcrProtoDescriptor.pcr.PcrServiceRegion(env.pcrProtoAddr, sslCreds);
  posClient = new posProtoDescriptor.pos.PositivityRate(env.pcrProtoAddr, sslCreds);
}
