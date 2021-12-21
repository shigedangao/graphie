import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import Express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { HospitalizationResolver } from './resolvers/Hospitalization';
import { loadPackageDefinition, credentials } from '@grpc/grpc-js';
import { load } from '@grpc/proto-loader';
import { ProtoGrpcType as ProtoHospital } from './proto/hospitalization';
import { CareStatusClient } from './proto/hospital/CareStatus';

// constant
const PROTO_PATH = `${__dirname}/../proto/hospitalization.proto`
const PROTO_OPTION = {
  longs: Number,
  enums: String,
  defaults: true,
  oneofs: true
};

// global variable
export let hospitalizationGuideClient: CareStatusClient;

const loadProtobuf = async () => {
  const packageDefinition = await load(PROTO_PATH, PROTO_OPTION);
  const protoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoHospital;
  const hospital = protoDescriptor.hospital;

  hospitalizationGuideClient = new hospital.CareStatus('[::1]:9000', credentials.createInsecure());
}

const main = async () => {
  // load protobuf and create the gRPC client
  await loadProtobuf();

  const schema = await buildSchema({
    resolvers: [
      HospitalizationResolver
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
