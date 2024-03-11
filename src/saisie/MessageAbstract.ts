export class MessageAbstract {
    private _message!: string;

    constructor(message: string) {
        this.message = message;
    }
    get message(): string { return this._message; }

    set message(message: string) { 
        if (message.length < 10) throw new Error("Le texte doit contenir au moins 10 caractères")
        this._message = message; 
    }

    toString(): string {
        return this.message;
    }
}