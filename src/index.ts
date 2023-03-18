import { ConfigLoader } from './config-loader';
import { ConfigLoaderBase } from './config-loader-base';
import { LoadConfigHandlerBase } from './load-handler-base';

export { ConfigLoader, ConfigLoaderBase, LoadConfigHandlerBase };
globalThis['lite-ts-config'] = { ConfigLoader, ConfigLoaderBase, LoadConfigHandlerBase };