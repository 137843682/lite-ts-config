import { ConfigLoader } from './config-loader';
import { ConfigLoaderBase } from './config-loader-base';
import { LoadConfigHandleOption, LoadConfigHandlerBase } from './load-handler-base';

export { ConfigLoader, ConfigLoaderBase, LoadConfigHandleOption, LoadConfigHandlerBase };
globalThis['lite-ts-config'] = { ConfigLoader, ConfigLoaderBase, LoadConfigHandlerBase };