export class SearchResult {
    temp: string;

    constructor (obj?: any) {
        this.temp = obj && obj.temp || null;
    }
}
