import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { HospitalizationResolver } from './resolvers/Hospitalization';
import { NewcaseResolver } from './resolvers/Newcase';
import { loadProtobuf } from './proto';
import { PcrDepartmentResolver } from './resolvers/Pcr';

const main = async () => {
  // load protobuf and create the gRPC client
  await loadProtobuf();

  const schema = await buildSchema({
    resolvers: [
      HospitalizationResolver,
      NewcaseResolver,
      PcrDepartmentResolver
    ],
    emitSchemaFile: true,
    validate: false
  });

  const server = new ApolloServer({
    schema,
    plugins: []
  });

  const app = Express();

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 3000 }, () => console.log('graphql server is running port 3000'))
}

main().catch((error) => console.error(error))
