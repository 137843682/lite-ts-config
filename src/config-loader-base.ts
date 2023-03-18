export abstract class ConfigLoaderBase {
    public abstract load<T>(typer: new () => T): Promise<T>;
}