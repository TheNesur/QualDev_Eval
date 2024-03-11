
import { MessageAbstract } from "./MessageAbstract.ts";
import {  ChiffrementMail} from "../chiffrement/ChiffrementMail.ts";

export class MessagePersonnel extends MessageAbstract {

    private _nombreDeDestinataire: number;
    private _mailDestinataire!: Array<string>;

    constructor(message: string, nbrDestinataire: number = 0, listeMail: Array<string> = new Array<string>) {
        super(message);
        this._nombreDeDestinataire = nbrDestinataire;
        this._mailDestinataire = listeMail;
        if (this._nombreDeDestinataire != this._mailDestinataire.length) throw new Error("Nombre de destinataire pas égale au nombre de mail");
        
    }

    get nombredeDestinataire(): number { return this._nombreDeDestinataire; }
    set nombredeDestinataire(nbrDestinataire: number) { this._nombreDeDestinataire = nbrDestinataire; }

    addDestinaire(mail: string): void {
        this._mailDestinataire.push(mail);
        this._nombreDeDestinataire++;
    }

    toString(): string {
        let message = this.toString() + "(alerte personnel) pour : ";
    

        for (let i = 0; i < this._mailDestinataire.length; i++) {
            if (i < this._mailDestinataire.length-1) message += this._mailDestinataire[i] + ', ';
            else  message += this._mailDestinataire[i];
            
        }

        return message;
    }

    toStringChiffre(): string {
        let message = this.toString() + "(alerte personnel) pour : ";
        let chif = new ChiffrementMail();

        for (let i = 0; i < this._mailDestinataire.length; i++) {
            if (i < this._mailDestinataire.length-1) message += this._mailDestinataire[i] + ', ';
            else  {

                chif.message = this._mailDestinataire[i];
                message += chif.chiffrer();
        }

        return message;
    }
}

}