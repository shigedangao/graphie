import { setupTestServer } from '../config'
import 'reflect-metadata'

describe('Mix queries', () => {
    let server;
    beforeAll(async () => {
        server = await setupTestServer();
    });

    describe('Get DREES data', () => {
        test('Should retrieve a set of data', async () => {
            const res = await server.executeOperation({
                query: `
                    query getMixData($data: MixInput!) {
                        getGlobalCovidDataByDate(data: $data) {
                            data {
                                pcrDone
                            }
                        }
                    }
                `,
                variables: {
                    data: {
                        date: { day: 2, month: 3, year: 2022 }
                    }
                }
            });

            expect(res.data).toBeDefined();
        });

        test('should retrieve a set of data w/o the day', async () => {
            const res = await server.executeOperation({
                query: `
                    query getMixData($data: MixInput!) {
                        getGlobalCovidDataByDate(data: $data) {
                            data {
                                pcrDone
                            }
                        }
                    }
                `,
                variables: {
                    data: {
                        date: { month: 2, year: 2022 },
                    }
                }
            });

            expect(res.data).toBeDefined();
        });

        test('should not retrieve a set of data because the date is missing', async () => {
            const res = await server.executeOperation({
                query: `
                    query getMixData($data: MixInput!) {
                        getGlobalCovidDataByDate(data: $data) {
                            data {
                                pcrPositive
                            }
                        }
                    }
                `,
                variables: {
                    data: {}
                }
            });

            expect(res.data).toBeUndefined();
            expect(res.errors).toBeDefined();
        });
    });
})