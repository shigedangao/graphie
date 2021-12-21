// Original file: proto/newcase.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CaseInput as _newcase_CaseInput, CaseInput__Output as _newcase_CaseInput__Output } from '../newcase/CaseInput';
import type { NewCases as _newcase_NewCases, NewCases__Output as _newcase_NewCases__Output } from '../newcase/NewCases';

export interface CaseServiceClient extends grpc.Client {
  getNewCaseByDepartment(argument: _newcase_CaseInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_newcase_NewCases__Output>): grpc.ClientUnaryCall;
  getNewCaseByDepartment(argument: _newcase_CaseInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_newcase_NewCases__Output>): grpc.ClientUnaryCall;
  getNewCaseByDepartment(argument: _newcase_CaseInput, options: grpc.CallOptions, callback: grpc.requestCallback<_newcase_NewCases__Output>): grpc.ClientUnaryCall;
  getNewCaseByDepartment(argument: _newcase_CaseInput, callback: grpc.requestCallback<_newcase_NewCases__Output>): grpc.ClientUnaryCall;
  getNewCaseByDepartment(argument: _newcase_CaseInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_newcase_NewCases__Output>): grpc.ClientUnaryCall;
  getNewCaseByDepartment(argument: _newcase_CaseInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_newcase_NewCases__Output>): grpc.ClientUnaryCall;
  getNewCaseByDepartment(argument: _newcase_CaseInput, options: grpc.CallOptions, callback: grpc.requestCallback<_newcase_NewCases__Output>): grpc.ClientUnaryCall;
  getNewCaseByDepartment(argument: _newcase_CaseInput, callback: grpc.requestCallback<_newcase_NewCases__Output>): grpc.ClientUnaryCall;
  
}

export interface CaseServiceHandlers extends grpc.UntypedServiceImplementation {
  getNewCaseByDepartment: grpc.handleUnaryCall<_newcase_CaseInput__Output, _newcase_NewCases>;
  
}

export interface CaseServiceDefinition extends grpc.ServiceDefinition {
  getNewCaseByDepartment: MethodDefinition<_newcase_CaseInput, _newcase_NewCases, _newcase_CaseInput__Output, _newcase_NewCases__Output>
}
