export type LoadConfigHandleOption = {
    name: string;
    res?: any;
};

export abstract class LoadConfigHandlerBase {
    protected next: LoadConfigHandlerBase;

    public setNext(next: LoadConfigHandlerBase) {
        this.next = next;
        return next;
    }

    public abstract handle(opt: LoadConfigHandleOption): Promise<void>;
}