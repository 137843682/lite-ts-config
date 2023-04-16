export type ConfigLoadHandlerContext = {
    name: string;
    areaNo?: number;
    res?: any;
};

export abstract class ConfigLoadHandlerBase {
    protected next: ConfigLoadHandlerBase;

    public setNext(next: ConfigLoadHandlerBase) {
        this.next = next;
        return next;
    }

    public abstract handle(ctx: ConfigLoadHandlerContext): Promise<void>;
}