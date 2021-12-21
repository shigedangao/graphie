import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import Express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { HospitalizationResolver } from './resolvers/Hospitalization';
import { NewcaseResolver } from './resolvers/Newcase';
import { loadPackageDefinition, credentials } from '@grpc/grpc-js';
import { load } from '@grpc/proto-loader';
import { ProtoGrpcType as ProtoHospital } from './proto/hospitalization';
import { ProtoGrpcType as ProtoNewCase } from './proto/newcase';
import { CareStatusClient } from './proto/hospital/CareStatus';
import { CaseServiceClient } from './proto/newcase/CaseService';

// constant
const HOSPITAL_PROTO_PATH = `${__dirname}/../proto/hospitalization.proto`
const NEWCASE_PROTO_PATH = `${__dirname}/../proto/newcase.proto`
const PROTO_OPTION = {
  longs: Number,
  enums: String,
  defaults: true,
  oneofs: true
};

// global variable
export let hospitalizationClient: CareStatusClient;
export let newcaseClient: CaseServiceClient;

/**
 *  Load Protobuf
 *    Load protobuf definition for each protobuf
 */
const loadProtobuf = async () => {
  const packageDefinition = await load([HOSPITAL_PROTO_PATH, NEWCASE_PROTO_PATH], PROTO_OPTION);

  const hospitalProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoHospital;
  const hospital = hospitalProtoDescriptor.hospital;

  const newcaseProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoNewCase;
  const newcase = newcaseProtoDescriptor.newcase;

  hospitalizationClient = new hospital.CareStatus('[::1]:9000', credentials.createInsecure());
  newcaseClient = new newcase.CaseService('[::1]:9000', credentials.createInsecure());
}

const main = async () => {
  // load protobuf and create the gRPC client
  await loadProtobuf();

  const schema = await buildSchema({
    resolvers: [
      HospitalizationResolver,
      NewcaseResolver
    ],
    emitSchemaFile: true,
    validate: false
  });

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
  });

  const app = Express();

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 3000 }, () => console.log('graphql server is running port 3000'))
}

main().catch((error) => console.error(error))
