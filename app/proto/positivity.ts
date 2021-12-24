import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PositivityRateClient as _pos_PositivityRateClient, PositivityRateDefinition as _pos_PositivityRateDefinition } from './pos/PositivityRate';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  pos: {
    PositivityCollection: MessageTypeDefinition
    PositivityDayResult: MessageTypeDefinition
    PositivityInput: MessageTypeDefinition
    PositivityRate: SubtypeConstructor<typeof grpc.Client, _pos_PositivityRateClient> & { service: _pos_PositivityRateDefinition }
    PositivityWeekCollection: MessageTypeDefinition
  }
}

