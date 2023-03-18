declare abstract class ConfigLoaderBase {
    abstract load<T>(typer: new () => T): Promise<T>;
}
type LoadConfigHandleOption = {
    name: string;
    res?: any;
};
declare abstract class LoaderConfigHandlerBase {
    protected next: LoaderConfigHandlerBase;
    setNext(next: LoaderConfigHandlerBase): LoaderConfigHandlerBase;
    abstract handle(opt: LoadConfigHandleOption): Promise<void>;
}
declare class ConfigLoader extends ConfigLoaderBase {
    private m_LoadHandler;
    constructor(m_LoadHandler: LoaderConfigHandlerBase);
    load<T>(typer: new () => T): Promise<any>;
}
{ ConfigLoader, ConfigLoaderBase, LoaderConfigHandlerBase };