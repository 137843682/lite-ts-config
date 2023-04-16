export abstract class ConfigLoaderBase {
    public static ctor = 'ConfigLoaderBase';

    public abstract load<T>(typer: new () => T, areaNo?: number): Promise<T>;
}