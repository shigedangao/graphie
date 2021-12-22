// Original file: proto/hospitalization.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CareStatusInput as _hospital_CareStatusInput, CareStatusInput__Output as _hospital_CareStatusInput__Output } from '../hospital/CareStatusInput';
import type { CareStatusOutput as _hospital_CareStatusOutput, CareStatusOutput__Output as _hospital_CareStatusOutput__Output } from '../hospital/CareStatusOutput';

export interface CareStatusClient extends grpc.Client {
  getHospitalStatusByRegion(argument: _hospital_CareStatusInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_hospital_CareStatusOutput__Output>): grpc.ClientUnaryCall;
  getHospitalStatusByRegion(argument: _hospital_CareStatusInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_hospital_CareStatusOutput__Output>): grpc.ClientUnaryCall;
  getHospitalStatusByRegion(argument: _hospital_CareStatusInput, options: grpc.CallOptions, callback: grpc.requestCallback<_hospital_CareStatusOutput__Output>): grpc.ClientUnaryCall;
  getHospitalStatusByRegion(argument: _hospital_CareStatusInput, callback: grpc.requestCallback<_hospital_CareStatusOutput__Output>): grpc.ClientUnaryCall;
  getHospitalStatusByRegion(argument: _hospital_CareStatusInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_hospital_CareStatusOutput__Output>): grpc.ClientUnaryCall;
  getHospitalStatusByRegion(argument: _hospital_CareStatusInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_hospital_CareStatusOutput__Output>): grpc.ClientUnaryCall;
  getHospitalStatusByRegion(argument: _hospital_CareStatusInput, options: grpc.CallOptions, callback: grpc.requestCallback<_hospital_CareStatusOutput__Output>): grpc.ClientUnaryCall;
  getHospitalStatusByRegion(argument: _hospital_CareStatusInput, callback: grpc.requestCallback<_hospital_CareStatusOutput__Output>): grpc.ClientUnaryCall;
  
}

export interface CareStatusHandlers extends grpc.UntypedServiceImplementation {
  getHospitalStatusByRegion: grpc.handleUnaryCall<_hospital_CareStatusInput__Output, _hospital_CareStatusOutput>;
  
}

export interface CareStatusDefinition extends grpc.ServiceDefinition {
  getHospitalStatusByRegion: MethodDefinition<_hospital_CareStatusInput, _hospital_CareStatusOutput, _hospital_CareStatusInput__Output, _hospital_CareStatusOutput__Output>
}
