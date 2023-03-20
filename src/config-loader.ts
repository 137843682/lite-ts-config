import { ConfigLoaderBase } from './config-loader-base';
import { LoadConfigHandleOption, LoadConfigHandlerBase } from './load-handler-base';

export class ConfigLoader extends ConfigLoaderBase {
    public constructor(
        private m_LoadHandler: LoadConfigHandlerBase,
    ) {
        super();
    }

    public async load<T>(typer: new () => T, areaNo = 0) {
        const opt: LoadConfigHandleOption = {
            name: (typer as any).ctor ?? typer.name,
            areaNo: areaNo
        };
        await this.m_LoadHandler.handle(opt);
        return opt.res;
    }
}