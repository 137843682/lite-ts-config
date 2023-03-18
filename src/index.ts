import { ConfigLoader } from './config-loader';
import { ConfigLoaderBase } from './config-loader-base';
import { LoaderConfigHandlerBase } from './load-handler-base';

export { ConfigLoader, ConfigLoaderBase, LoaderConfigHandlerBase };
globalThis['lite-ts-config'] = { ConfigLoader, ConfigLoaderBase, LoaderConfigHandlerBase };