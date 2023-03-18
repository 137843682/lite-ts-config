declare abstract class ConfigLoaderBase {
    abstract load<T>(typer: new () => T): Promise<T>;
}
type LoadConfigHandleOption = {
    name: string;
    res?: any;
};
declare abstract class LoadConfigHandlerBase {
    protected next: LoadConfigHandlerBase;
    setNext(next: LoadConfigHandlerBase): LoadConfigHandlerBase;
    abstract handle(opt: LoadConfigHandleOption): Promise<void>;
}
declare class ConfigLoader extends ConfigLoaderBase {
    private m_LoadHandler;
    constructor(m_LoadHandler: LoadConfigHandlerBase);
    load<T>(typer: new () => T): Promise<any>;
}
{ ConfigLoader, ConfigLoaderBase, LoadConfigHandlerBase };