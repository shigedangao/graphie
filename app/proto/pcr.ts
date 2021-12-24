import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PcrServiceDepartmentClient as _pcr_PcrServiceDepartmentClient, PcrServiceDepartmentDefinition as _pcr_PcrServiceDepartmentDefinition } from './pcr/PcrServiceDepartment';
import type { PcrServiceRegionClient as _pcr_PcrServiceRegionClient, PcrServiceRegionDefinition as _pcr_PcrServiceRegionDefinition } from './pcr/PcrServiceRegion';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  pcr: {
    PcrInputDepartment: MessageTypeDefinition
    PcrInputRegion: MessageTypeDefinition
    PcrOutput: MessageTypeDefinition
    PcrResult: MessageTypeDefinition
    PcrServiceDepartment: SubtypeConstructor<typeof grpc.Client, _pcr_PcrServiceDepartmentClient> & { service: _pcr_PcrServiceDepartmentDefinition }
    PcrServiceRegion: SubtypeConstructor<typeof grpc.Client, _pcr_PcrServiceRegionClient> & { service: _pcr_PcrServiceRegionDefinition }
  }
}

