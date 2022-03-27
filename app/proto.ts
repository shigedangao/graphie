import fs from 'fs'
import { env } from './env';
import { loadPackageDefinition, credentials, ChannelCredentials } from '@grpc/grpc-js';
import { load } from '@grpc/proto-loader';

// Improt proto type
import { ProtoGrpcType as ProtoHospital } from './proto/hospitalization';
import { ProtoGrpcType as ProtoNewCase } from './proto/newcase';
import { ProtoGrpcType as ProtoPcr } from './proto/pcr';
import { ProtoGrpcType as ProtoPos } from './proto/positivity';
import { ProtoGrpcType as ProtoIcu } from './proto/icu';
import { ProtoGrpcType as ProtoMix } from './proto/mix';

// Import proto service
import { CareStatusClient } from './proto/hospital/CareStatus';
import { CaseServiceClient } from './proto/newcase/CaseService';
import { PcrServiceClient } from './proto/pcr/PcrService';
import { PositivityRateClient } from './proto/pos/PositivityRate';
import { IcuServiceClient } from './proto/icu/IcuService';
import { MixServiceClient } from './proto/mix/MixService';
import { LevelServiceClient } from './proto/hospital/LevelService';

// constant
const PROTO_OPTION = {
  longs: Number,
  enums: String,
  defaults: true,
  oneofs: true
};

// global variable
export let hospitalizationClient: CareStatusClient;
export let levelClient: LevelServiceClient;
export let newcaseClient: CaseServiceClient;
export let pcrClient: PcrServiceClient;
export let posClient: PositivityRateClient;
export let icuClient: IcuServiceClient;
export let mixClient: MixServiceClient

/**
 * Load Protobuf
 *
 * @return {Promise}
 */
export const loadProtobuf = async () => {
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
  const mixProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoMix;

  // hospital microservice
  const insecureChannel = ChannelCredentials.createInsecure();
  hospitalizationClient = new hospitalProtoDescriptor.hospital.CareStatus(env.hospitalProtoAddr, insecureChannel);
  levelClient = new hospitalProtoDescriptor.hospital.LevelService(env.hospitalProtoAddr, insecureChannel);
  newcaseClient = new newcaseProtoDescriptor.newcase.CaseService(env.hospitalProtoAddr, insecureChannel);
  icuClient = new icuProtoDescriptor.icu.IcuService(env.hospitalProtoAddr, insecureChannel);
  mixClient = new mixProtoDescriptor.mix.MixService(env.hospitalProtoAddr, insecureChannel);

  // pcr microservice
  pcrClient = new pcrProtoDescriptor.pcr.PcrService(env.pcrProtoAddr, insecureChannel);
  posClient = new posProtoDescriptor.pos.PositivityRate(env.pcrProtoAddr, insecureChannel);
}
