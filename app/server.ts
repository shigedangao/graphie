import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { HospitalizationResolver } from './resolvers/Hospitalization';
import { NewcaseResolver } from './resolvers/Newcase';
import { loadProtobuf, mixClient } from './proto';
import { PcrResolver } from './resolvers/Pcr';
import { PositivityResolver } from './resolvers/Positiviity';
import { loadEnv } from './env';
import { IcuResolver } from './resolvers/Icu';
import { MixResolver } from './resolvers/Mix';

const main = async () => {
  await loadEnv();
  // load protobuf and create the gRPC client
  await loadProtobuf();

  const schema = await buildSchema({
    resolvers: [
      HospitalizationResolver,
      NewcaseResolver,
      PcrResolver,
      PositivityResolver,
      IcuResolver,
      MixResolver
    ],
    emitSchemaFile: true,
    validate: false
  });

  const server = new ApolloServer({
    schema,
    plugins: []
  });

  const app = Express();

  app.use(cors({
    origin: '*'
  }));

  app.get('/', (_, res) => res.send('hello'))

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 3000 }, () => console.log('graphql server is running port 3000'))
}

main().catch((error) => console.error(error))
