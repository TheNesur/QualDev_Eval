
import { ChiffrementMessage } from "../chiffrement/ChiffrementMessage.ts";

import { ChiffrementMail } from "../chiffrement/ChiffrementMail.ts";

import { Menu } from "../menu/Menu.ts";

function main(): void {

    // let chifrement = new ChiffrementMessage();

    // chifrement.message = "Zbca"; //  a = 97 | z = 122 | A = 65 | Z = 90
    // console.log (chifrement.message);
    // console.log (chifrement.chiffrer());

    let menu = new Menu();

    menu.nouveauMessage();
    menu.nouveauMessage();


}

main();