// Original file: mask/proto/positivity.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PositivityCollection as _pos_PositivityCollection, PositivityCollection__Output as _pos_PositivityCollection__Output } from '../pos/PositivityCollection';
import type { PositivityInput as _pos_PositivityInput, PositivityInput__Output as _pos_PositivityInput__Output } from '../pos/PositivityInput';
import type { PositivityWeekCollection as _pos_PositivityWeekCollection, PositivityWeekCollection__Output as _pos_PositivityWeekCollection__Output } from '../pos/PositivityWeekCollection';

export interface PositivityRateClient extends grpc.Client {
  getPositivityByDepartmentPerDay(argument: _pos_PositivityInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pos_PositivityCollection__Output>): grpc.ClientUnaryCall;
  getPositivityByDepartmentPerDay(argument: _pos_PositivityInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_pos_PositivityCollection__Output>): grpc.ClientUnaryCall;
  getPositivityByDepartmentPerDay(argument: _pos_PositivityInput, options: grpc.CallOptions, callback: grpc.requestCallback<_pos_PositivityCollection__Output>): grpc.ClientUnaryCall;
  getPositivityByDepartmentPerDay(argument: _pos_PositivityInput, callback: grpc.requestCallback<_pos_PositivityCollection__Output>): grpc.ClientUnaryCall;
  getPositivityByDepartmentPerDay(argument: _pos_PositivityInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pos_PositivityCollection__Output>): grpc.ClientUnaryCall;
  getPositivityByDepartmentPerDay(argument: _pos_PositivityInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_pos_PositivityCollection__Output>): grpc.ClientUnaryCall;
  getPositivityByDepartmentPerDay(argument: _pos_PositivityInput, options: grpc.CallOptions, callback: grpc.requestCallback<_pos_PositivityCollection__Output>): grpc.ClientUnaryCall;
  getPositivityByDepartmentPerDay(argument: _pos_PositivityInput, callback: grpc.requestCallback<_pos_PositivityCollection__Output>): grpc.ClientUnaryCall;
  
  getPositivityByDepartmentPerWeek(argument: _pos_PositivityInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pos_PositivityWeekCollection__Output>): grpc.ClientUnaryCall;
  getPositivityByDepartmentPerWeek(argument: _pos_PositivityInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_pos_PositivityWeekCollection__Output>): grpc.ClientUnaryCall;
  getPositivityByDepartmentPerWeek(argument: _pos_PositivityInput, options: grpc.CallOptions, callback: grpc.requestCallback<_pos_PositivityWeekCollection__Output>): grpc.ClientUnaryCall;
  getPositivityByDepartmentPerWeek(argument: _pos_PositivityInput, callback: grpc.requestCallback<_pos_PositivityWeekCollection__Output>): grpc.ClientUnaryCall;
  getPositivityByDepartmentPerWeek(argument: _pos_PositivityInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pos_PositivityWeekCollection__Output>): grpc.ClientUnaryCall;
  getPositivityByDepartmentPerWeek(argument: _pos_PositivityInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_pos_PositivityWeekCollection__Output>): grpc.ClientUnaryCall;
  getPositivityByDepartmentPerWeek(argument: _pos_PositivityInput, options: grpc.CallOptions, callback: grpc.requestCallback<_pos_PositivityWeekCollection__Output>): grpc.ClientUnaryCall;
  getPositivityByDepartmentPerWeek(argument: _pos_PositivityInput, callback: grpc.requestCallback<_pos_PositivityWeekCollection__Output>): grpc.ClientUnaryCall;
  
}

export interface PositivityRateHandlers extends grpc.UntypedServiceImplementation {
  getPositivityByDepartmentPerDay: grpc.handleUnaryCall<_pos_PositivityInput__Output, _pos_PositivityCollection>;
  
  getPositivityByDepartmentPerWeek: grpc.handleUnaryCall<_pos_PositivityInput__Output, _pos_PositivityWeekCollection>;
  
}

export interface PositivityRateDefinition extends grpc.ServiceDefinition {
  getPositivityByDepartmentPerDay: MethodDefinition<_pos_PositivityInput, _pos_PositivityCollection, _pos_PositivityInput__Output, _pos_PositivityCollection__Output>
  getPositivityByDepartmentPerWeek: MethodDefinition<_pos_PositivityInput, _pos_PositivityWeekCollection, _pos_PositivityInput__Output, _pos_PositivityWeekCollection__Output>
}
