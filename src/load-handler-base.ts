export type LoadConfigHandleOption = {
    name: string;
    res?: any;
};

export abstract class LoaderConfigHandlerBase {
    protected next: LoaderConfigHandlerBase;

    public setNext(next: LoaderConfigHandlerBase) {
        this.next = next;
        return next;
    }

    public abstract handle(opt: LoadConfigHandleOption): Promise<void>;
}