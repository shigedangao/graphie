// Original file: proto/pcr.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PcrInputDepartment as _pcr_PcrInputDepartment, PcrInputDepartment__Output as _pcr_PcrInputDepartment__Output } from '../pcr/PcrInputDepartment';
import type { PcrOutput as _pcr_PcrOutput, PcrOutput__Output as _pcr_PcrOutput__Output } from '../pcr/PcrOutput';

export interface PcrServiceDepartmentClient extends grpc.Client {
  getPcrTestMadeByDepartment(argument: _pcr_PcrInputDepartment, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  getPcrTestMadeByDepartment(argument: _pcr_PcrInputDepartment, metadata: grpc.Metadata, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  getPcrTestMadeByDepartment(argument: _pcr_PcrInputDepartment, options: grpc.CallOptions, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  getPcrTestMadeByDepartment(argument: _pcr_PcrInputDepartment, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  getPcrTestMadeByDepartment(argument: _pcr_PcrInputDepartment, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  getPcrTestMadeByDepartment(argument: _pcr_PcrInputDepartment, metadata: grpc.Metadata, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  getPcrTestMadeByDepartment(argument: _pcr_PcrInputDepartment, options: grpc.CallOptions, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  getPcrTestMadeByDepartment(argument: _pcr_PcrInputDepartment, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  
}

export interface PcrServiceDepartmentHandlers extends grpc.UntypedServiceImplementation {
  getPcrTestMadeByDepartment: grpc.handleUnaryCall<_pcr_PcrInputDepartment__Output, _pcr_PcrOutput>;
  
}

export interface PcrServiceDepartmentDefinition extends grpc.ServiceDefinition {
  getPcrTestMadeByDepartment: MethodDefinition<_pcr_PcrInputDepartment, _pcr_PcrOutput, _pcr_PcrInputDepartment__Output, _pcr_PcrOutput__Output>
}
