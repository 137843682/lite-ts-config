import { ioc } from 'lite-ts-ioc';

import { ConfigLoaderBase } from './loader-base';
import { ConfigLoadHandlerBase, ConfigLoadHandlerContext } from './load-handler-base';

export class ConfigLoader extends ConfigLoaderBase {
    public constructor(
        private m_LoadHandler: ConfigLoadHandlerBase,
    ) {
        super();
    }

    public async load<T>(typer: new () => T, areaNo = 0) {
        const opt: ConfigLoadHandlerContext = {
            name: ioc.getKey(typer),
            areaNo: areaNo
        };
        await this.m_LoadHandler.handle(opt);
        return opt.res;
    }
}