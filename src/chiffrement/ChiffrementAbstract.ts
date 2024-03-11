export class ChiffrementAbstract {
    private _message: string;

    constructor(message = '') {
        this._message = message;
    }
    get message(): string { return this._message; }

    set message(message: string) { this._message = message; }
}