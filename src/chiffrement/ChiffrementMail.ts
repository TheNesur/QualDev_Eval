import { ChiffrementAbstract } from "./ChiffrementAbstract.ts";

export class ChiffrementMail extends ChiffrementAbstract {

    constructor () {
        super();
    }

    chiffrer(): string {
        let messageChiffrer = '';

        for (let i = this.message.length-1; i >= 0; i--) {
            messageChiffrer += this.message[i];            
        }

        return messageChiffrer;
    }

}