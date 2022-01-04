import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CaseServiceClient as _newcase_CaseServiceClient, CaseServiceDefinition as _newcase_CaseServiceDefinition } from './newcase/CaseService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  newcase: {
    CaseInput: MessageTypeDefinition
    CaseResult: MessageTypeDefinition
    CaseService: SubtypeConstructor<typeof grpc.Client, _newcase_CaseServiceClient> & { service: _newcase_CaseServiceDefinition }
    NewCases: MessageTypeDefinition
  }
}

