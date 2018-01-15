export class QueryManager {
    constructor(templates: string | Array<string>);
    public get(key: string, options?: object): string;
    public add(templates: string | Array<string>): void;
}