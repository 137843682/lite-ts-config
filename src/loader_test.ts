import { Mock } from 'lite-ts-mock';

import { ConfigLoadHandlerBase } from './load-handler-base';
import { ConfigLoader as Self } from './loader';

describe('src/config-loader.ts', () => {
    describe('.load<T>(typer: new () => T)', () => {
        it('ctor', async () => {
            const mockLoadHandler = new Mock<ConfigLoadHandlerBase>;
            const self = new Self(mockLoadHandler.actual);

            mockLoadHandler.expected.handle({
                areaNo: 0,
                name: 'tt'
            });

            await self.load(class Test {
                public static ctor = 'tt';
            });
        });

        it('constructor', async () => {
            const mockLoadHandler = new Mock<ConfigLoadHandlerBase>;
            const self = new Self(mockLoadHandler.actual);

            mockLoadHandler.expected.handle({
                areaNo: 0,
                name: 'Test',
            });

            await self.load(class Test { });
        });
    });
});