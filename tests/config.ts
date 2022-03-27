import { ApolloServer, gql } from 'apollo-server';
import { promisify } from 'util';
import { loadProtobuf } from '../app/proto'
import { loadEnv } from '../app/env';
import fs from 'fs';

const importSchema = async (): Promise<String> => {
    const read = promisify(fs.readFile);
    const res = await read(`${__dirname}/../schema.gql`);

    return res.toString();
}

/**
 * Server for testing the client
 */
export const setupTestServer = async (): Promise<ApolloServer> => {
    await loadEnv();
    await loadProtobuf();
    const schema = await importSchema();
    const typeDefs = gql`${schema}`;

    const server = new ApolloServer({
        typeDefs,
        mocks: true
    });

    return server;
}