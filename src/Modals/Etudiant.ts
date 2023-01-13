import { Member } from "./Member";

export interface Etudiant extends Member{
    id:string;
    nom:string;
    prenom :string;
    email :string;
    dateNaissance :Date;
    cin :string;
    cv :string;
    password :string;
    diplome? :string;
    sujet? :string;
    dateInscription  ?: Date;
    ensId : number;
}