import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CareStatusClient as _hospital_CareStatusClient, CareStatusDefinition as _hospital_CareStatusDefinition } from './hospital/CareStatus';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  hospital: {
    CareStatus: SubtypeConstructor<typeof grpc.Client, _hospital_CareStatusClient> & { service: _hospital_CareStatusDefinition }
    CareStatusInput: MessageTypeDefinition
    CareStatusOutput: MessageTypeDefinition
    CareStatusResult: MessageTypeDefinition
  }
}

