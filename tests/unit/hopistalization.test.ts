import { ApolloServer, gql } from 'apollo-server';
import { loadProtobuf } from '../../app/proto'
import { loadEnv } from '../../app/env';
import { promisify } from 'util';
import fs from 'fs';
import 'reflect-metadata'

const importSchema = async (): Promise<String> => {
    const read = promisify(fs.readFile);
    const res = await read(`${__dirname}/../../schema.gql`);

    return res.toString();
}

/**
 * Server for testing the client
 */
const setupTestServer = async (): Promise<ApolloServer> => {
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

describe('Hospital queries', () => {
    let server;
    beforeAll(async () => {
        server = await setupTestServer();
    });

    // Hospitalization - getNewCaseByDepartment
    describe('Get hospital data by department', () => {
        test('should retrieve a set of data', async () => {
            const res = await server.executeOperation({
                query: `
                    query GetNewCaseByDepartment($data: NewCaseInput!) {
                        getNewCaseByDepartment(data: $data) {
                            cases {
                                new_entry_hospital
                                new_entry_icu
                            }
                        }
                    }
                `,
                variables: {
                    data: {
                        date: { day: 10, month: 2, year: 2022 },
                        department: "77"
                    }
                }
            });

            expect(res.data?.getNewCaseByDepartment.cases).toBeDefined();
            expect(res.errors).toBeUndefined();
        });

        test('should fail if the date is missing', async () => {
            const res = await server.executeOperation({
                query: `
                    query GetNewCaseByDepartment($data: NewCaseInput!) {
                        getNewCaseByDepartment(data: $data) {
                            cases { backHome }
                        }
                    }
                `,
                variables: {
                    data: { department: "77" }
                }
            });

            expect(res.errors).toBeDefined();
        });

        test('should retrieve a set of data without the day', async () => {
            const res = await server.executeOperation({
                query: `
                    query GetNewCaseByDepartment($data: NewCaseInput!) {
                        getNewCaseByDepartment(data: $data) {
                            cases { backHome }
                        }
                    }
                `,
                variables: {
                    data: {
                        date: { month: 2, year: 2022 },
                        department: "77"
                    }
                }
            });

            expect(res.data?.getNewCaseByDepartment.cases).toBeDefined();
            expect(res.errors).toBeUndefined();
        });
    });

    // Hospitalization - getHospitalStatusByRegion
    describe('Get hospital data by region', () => {
        test('should retrieve the data by region', async () => {
            const res = await server.executeOperation({
                query: `
                    query GetStatusByRegion($data: HospitalizationInput!) {
                        getStatusByRegion(data: $data) {
                            cases { backHome }
                        }
                    }
                `,
                variables: {
                    data: {
                        date: { day: 10, month: 2, year: 2022 },
                        region: 1
                    }
                }
            });

            expect(res.data?.getStatusByRegion.cases).toBeDefined();
            expect(res.errors).toBeUndefined();
        });

        test('should retrieve data if day is missing', async () => {
            const res = await server.executeOperation({
                query: `
                    query GetStatusByRegion($data: HospitalizationInput!) {
                        getStatusByRegion(data: $data) {
                            cases { backHome }
                        }
                    }
                `,
                variables: {
                    data: {
                        date: { month: 2, year: 2022 },
                        region: 1
                    }
                }
            });

            expect(res.data?.getStatusByRegion.cases).toBeDefined();
            expect(res.errors).toBeUndefined();
        });

        test('should return an error due to missing date', async () => {
            const res = await server.executeOperation({
                query: `
                    query GetStatusByRegion($data: HospitalizationInput!) {
                        getStatusByRegion(data: $data) {
                            cases { backHome }
                        }
                    }
                `,
                variables: {
                    data: {
                        region: 1
                    }
                }
            });

            expect(res.errors).toBeDefined();
        });

        test('should return an error due to wrong region format', async () => {
            const res = await server.executeOperation({
                query: `
                    query GetStatusByRegion($data: HospitalizationInput!) {
                        getStatusByRegion(data: $data) {
                            cases { backHome }
                        }
                    }
                `,
                variables: {
                    data: {
                        date: { month: 2, year: 2022 },
                        region: '1'
                    }
                }
            });

            expect(res.errors).toBeDefined();
        });
    });

})