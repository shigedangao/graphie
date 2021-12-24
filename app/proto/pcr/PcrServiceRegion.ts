// Original file: proto/pcr.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PcrInputRegion as _pcr_PcrInputRegion, PcrInputRegion__Output as _pcr_PcrInputRegion__Output } from '../pcr/PcrInputRegion';
import type { PcrOutput as _pcr_PcrOutput, PcrOutput__Output as _pcr_PcrOutput__Output } from '../pcr/PcrOutput';

export interface PcrServiceRegionClient extends grpc.Client {
  getPcrTestMadeByRegion(argument: _pcr_PcrInputRegion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  getPcrTestMadeByRegion(argument: _pcr_PcrInputRegion, metadata: grpc.Metadata, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  getPcrTestMadeByRegion(argument: _pcr_PcrInputRegion, options: grpc.CallOptions, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  getPcrTestMadeByRegion(argument: _pcr_PcrInputRegion, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  getPcrTestMadeByRegion(argument: _pcr_PcrInputRegion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  getPcrTestMadeByRegion(argument: _pcr_PcrInputRegion, metadata: grpc.Metadata, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  getPcrTestMadeByRegion(argument: _pcr_PcrInputRegion, options: grpc.CallOptions, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  getPcrTestMadeByRegion(argument: _pcr_PcrInputRegion, callback: grpc.requestCallback<_pcr_PcrOutput__Output>): grpc.ClientUnaryCall;
  
}

export interface PcrServiceRegionHandlers extends grpc.UntypedServiceImplementation {
  getPcrTestMadeByRegion: grpc.handleUnaryCall<_pcr_PcrInputRegion__Output, _pcr_PcrOutput>;
  
}

export interface PcrServiceRegionDefinition extends grpc.ServiceDefinition {
  getPcrTestMadeByRegion: MethodDefinition<_pcr_PcrInputRegion, _pcr_PcrOutput, _pcr_PcrInputRegion__Output, _pcr_PcrOutput__Output>
}
