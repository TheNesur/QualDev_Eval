import { ChiffrementAbstract } from "./ChiffrementAbstract.ts";

export class ChiffrementMessage extends ChiffrementAbstract {

    private _codeChar_a: number;
    private _codeChar_A: number;
    private _codeChar_z: number;
    private _codeChar_Z: number;



    constructor () {
        super();
        this._codeChar_a = 97;
        this._codeChar_A = 65;
        this._codeChar_z = 122;
        this._codeChar_Z = 90
    }
    //  a = 97 | z = 122 | A = 65 | Z = 90

    // private chiffreCodeChar(char:string, posA: number, posZ: number): string {
    //     if ((posA != this._codeChar_A || posA != this._codeChar_a ) && (posZ != this._codeChar_Z || posZ != this._codeChar_z )) throw new Error("Position A ou Z incorrect dans la class Chiffrement Message !");

    //     let codeChar = char.charCodeAt(0);

    //     if (char == String.fromCharCode(posZ)) return String.fromCharCode(this._codeChar_a);
    //     else {
    //         return String.fromCharCode(codeChar + 1);
    //     }


    // }


    chiffrer(): string {
        let messageChiffrer = '';

        for (let i = 0; i < this.message.length; i++) {
            let codeCharMessage = this.message[i].charCodeAt(0);
            if (codeCharMessage >= this._codeChar_a && codeCharMessage <= this._codeChar_z) {
                if (codeCharMessage == this._codeChar_z) messageChiffrer += String.fromCharCode(this._codeChar_a);
                else {
                    messageChiffrer += String.fromCharCode(codeCharMessage + 1);
                }
                // messageChiffrer += this.chiffreCodeChar(this.message[i], this._codeChar_a, this._codeChar_z);
            }
            else if (codeCharMessage >= this._codeChar_A && codeCharMessage <= this._codeChar_Z) {

                if (codeCharMessage == this._codeChar_Z) messageChiffrer += String.fromCharCode(this._codeChar_A);
                else {
                    messageChiffrer += String.fromCharCode(codeCharMessage + 1);
                }
                // messageChiffrer += this.chiffreCodeChar(this.message[i], this._codeChar_A, this._codeChar_Z);
            }

        }

        return messageChiffrer;
    }

}