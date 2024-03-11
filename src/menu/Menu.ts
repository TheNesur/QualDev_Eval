import { MessageAbstract } from "../saisie/MessageAbstract.ts";
import { MessagePersonnel } from "../saisie/MessagePersonnel.ts";
import { MessageGeneral } from "../saisie/MessageGeneral.ts";


export class Menu {
    private _ListeMessage: Array<MessageAbstract>


    constructor() {
        this._ListeMessage = new Array<MessageAbstract>;
    }


    private question(): string {
        let reponse : string;

        do {
            reponse = String(prompt("Quel type de message voulez-vous saisir ? (g/p)"));
        } while (reponse != 'g' && reponse != 'p');
        return reponse;
    }

    private saisieMessage(): string {
        let reponse : string;
        do {
            reponse = String(prompt("Veuillez saisir le message : "));
            if (reponse.length < 10) console.log("Le texte doit contenir au moins 10 caractères");
        } while (reponse.length < 10);
        return reponse;
    }


    private saisieGeneral(): void {
        let message = this.saisieMessage();
        let nbrParticipant: number;

        let listeMail = new Array<string>;

        do {
            nbrParticipant = Number(prompt("Combien de destinataires voulez-vous saisir ? : "));
        } while (nbrParticipant < 0);

        for (let i = 0; i < nbrParticipant; i++) {
            listeMail.push(String(prompt("Veuillez saisir l'email du destinataire " + i + " : ")));
        }
        


        this._ListeMessage.push(new MessageGeneral(message));
    }


    private saisiePersonnel(): void {
        let message = this.saisieMessage();
        this._ListeMessage.push(new MessagePersonnel(message));
    }


    nouveauMessage(): void {
        console.log("Saisie d'un nouveau message");
        switch (this.question()) {
            case 'g':
                this.saisieGeneral();
                break;
            case 'p':
                this.saisiePersonnel();
                break;
        
            default:
                break;
        }
    }


    afficherMessage(): void {
        console.log("Voici les messages saisies : \n");

        for (let i = 0; i < this._ListeMessage.length; i++) {
            console.log("Message :", this._ListeMessage[i].toString());
        }
    }
    afficherMessageChiffre(): void {
        
        console.log("Voici les messages saisies : \n");

        for (let i = 0; i < this._ListeMessage.length; i++) {
            console.log("Message :", this._ListeMessage[i].toString());
        }
    }





}