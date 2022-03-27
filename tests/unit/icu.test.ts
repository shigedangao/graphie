import { setupTestServer } from '../config'
import 'reflect-metadata'

describe('Icu queries', () => {
    let server;
    beforeAll(async () => {
        server = await setupTestServer();
    });

    describe('Get ICU data for non vaccinated people', () => {
        test('should retrieve a set of data', async () => {
            const res = await server.executeOperation({
                query: `
                    query GetIcuLevelForUnvaccinated($data: IcuInput!) {
                        getFranceIcuLevelForNonVaxx(data: $data) {
                            data {
                                day
                                rate
                            }
                        }
                    }
                `,
                variables: {
                    data: {
                        date: { day: 2, month: 2, year: 2022 },
                    }
                }
            });

            expect(res.data).toBeDefined();
        });

        test('should retrieve a set of data w/o the day', async () => {
            const res = await server.executeOperation({
                query: `
                    query GetIcuLevelForUnvaccinated($data: IcuInput!) {
                        getFranceIcuLevelForNonVaxx(data: $data) {
                            data { rate }
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
                    query GetIcuLevelForUnvaccinated($data: IcuInput!) {
                        getFranceIcuLevelForNonVaxx(data: $data) {
                            data {
                                day
                                rate
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

        test('should not retrieve a set of data because the date is malformatted', async () => {
            const res = await server.executeOperation({
                query: `
                    query GetIcuLevelForUnvaccinated($data: IcuInput!) {
                        getFranceIcuLevelForNonVaxx(data: $data) {
                            data {
                                day
                                rate
                            }
                        }
                    }
                `,
                variables: {
                    data: { day: 'foo', month: 2, year: 2022 }
                }
            });

            expect(res.data).toBeUndefined();
            expect(res.errors).toBeDefined();
        });
    });

    describe('Get ICU data for vaccinated people', () => {
        // Only test once as it uses the same underlying data...
        test('should retrieve a set of data', async () => {
            const res = await server.executeOperation({
                query: `
                    query GetIcuLevelForVaccinated($data: IcuInput!) {
                        getFranceIcuLevelForVaxx(data: $data) {
                            data {
                                day
                                rate
                            }
                        }
                    }
                `,
                variables: {
                    data: {
                        date: { day: 2, month: 2, year: 2022 },
                    }
                }
            });

            expect(res.data).toBeDefined();
        });
    });
})