import { ConfigLoaderBase } from './config-loader-base';
import { LoadConfigHandleOption, LoadConfigHandlerBase } from './load-handler-base';

export class ConfigLoader extends ConfigLoaderBase {
    public constructor(
        private m_LoadHandler: LoadConfigHandlerBase,
    ) {
        super();
    }

    public async load<T>(typer: new () => T) {
        const opt: LoadConfigHandleOption = {
            name: (typer as any).ctor ?? typer.name
        };
        await this.m_LoadHandler.handle(opt);
        return opt.res;
    }
}