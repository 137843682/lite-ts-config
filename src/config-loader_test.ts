import { Mock } from 'lite-ts-mock';

import { ConfigLoader as Self } from './config-loader';
import { LoadConfigHandlerBase } from './load-handler-base';

describe('src/config-loader.ts', () => {
    describe('.load<T>(typer: new () => T)', () => {
        it('ctor', async () => {
            const mockLoadHandler = new Mock<LoadConfigHandlerBase>;
            const self = new Self(mockLoadHandler.actual);

            mockLoadHandler.expected.handle({
                name: 'tt'
            });

            await self.load(class Test {
                public static ctor = 'tt';
            });
        });

        it('constructor', async () => {
            const mockLoadHandler = new Mock<LoadConfigHandlerBase>;
            const self = new Self(mockLoadHandler.actual);

            mockLoadHandler.expected.handle({
                name: 'Test'
            });

            await self.load(class Test { });
        });
    });
});