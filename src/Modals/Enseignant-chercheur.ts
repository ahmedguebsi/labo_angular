import { Member } from "./Member";

export interface EnseignantChercheur extends Member{
    id:string;
    nom:string;
    prenom:string;
    email:string;
    dateNaissance:Date;
    cin:string;
    cv:string;
    password:string;
    grade?:string;
    etablissement ?: string;
}