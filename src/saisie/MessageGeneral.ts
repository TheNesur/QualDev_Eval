
import { MessageAbstract } from "./MessageAbstract.ts";

export class MessageGeneral extends MessageAbstract {

    constructor(message: string) {
        super(message);
    }

    toString(): string {
      return this.toString() + "(alerte générale)";
    }

}