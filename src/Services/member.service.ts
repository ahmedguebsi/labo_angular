import {Injectable} from '@angular/core';
import {Member} from "../Modals/Member";
import {GLOBAL} from "../app/app_config";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnseignantChercheur } from '../Modals/Enseignant-chercheur';
import { Etudiant } from '../Modals/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseURL="http://localhost:8081/api/membres";
  public tab : Member[]= GLOBAL._DB.members;
  public member : Member | undefined ;
  public enseignant : EnseignantChercheur | undefined ;
  public etudiant : Etudiant | undefined ;

 deleteMemberbyID(id : string):Promise<void>{
    // return this.httpCient.delete<void>('link').toPromise();//link li bch n'invoki biha l microservice bch yfassa5 ml back bl postman
   this.tab=this.tab.filter(item => item.id!=id);
   return new Promise(resolve => resolve());
   }


  constructor(private httpClient: HttpClient) {
  }


  saveMember(objectToSubmit: any): Promise<Member> {
    // si j'ai la partie back
    //return this.httpClient.post('linktorestAPI',objectToSubmit).toPromise();

    const memberToSave = {
      ...objectToSubmit,
      id: objectToSubmit.id ?? Math.ceil(Math.random() * 100000).toString(),
      creationDate: objectToSubmit.creationDate ?? new Date().toISOString()
    };
    this.tab = [memberToSave, ...this.tab.filter(item => item.id != memberToSave.id)];
    return new Promise(resolve => resolve(memberToSave));
  }

  getMemberById(currentID: string): Promise<Member> {
    // si j'ai la partie back
    //return this.httpClient.get<Member>('linktorestAPI').toPromise();

    return new Promise(resolve => resolve(this.tab.filter(item => item.id === currentID) [0] ?? null));
  }

  deleteMember(memberId: string): Promise<void> {
    // si j'ai la partie back
    //return this.httpClient.delete<void>('linktorestAPI').toPromise();

    this.tab = [...this.tab.filter(item => item.id != memberId)];
    console.log(this.tab);
    return new Promise(resolve => resolve());
  }

  getAllMembers(): Promise<Member[]> {
    // si j'ai la partie back
    //return this.httpClient.get<Member[]>('linktorestAPI').toPromise();
    return new Promise(resolve => resolve(this.tab));
  }


  getMembersList(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}`);
  }

  // save member :
  saveMembreEtd(etd: Etudiant): Observable<any>{
    
    console.log(etd);

    return this.httpClient.post(`${this.baseURL}/etudiant`, etd , {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })});
  }

  saveMembreEns(ens: EnseignantChercheur): Observable<Object>{
    console.log(ens);

    return this.httpClient.post(`${this.baseURL}/enseignant`, ens , {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })});
  }

  deleteMembre(id: any): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  // Get Members By Id :

  getEnsById(id: string): Observable<EnseignantChercheur>{
    return this.httpClient.get<EnseignantChercheur>(`${this.baseURL}/${id}`);
  }

  getEtdById(id: string): Observable<Etudiant>{
    return this.httpClient.get<Etudiant>(`${this.baseURL}/${id}`);
  }
  
  // Update Members functions :
  
  updateMemberEns(id: string, ens: EnseignantChercheur): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/enseignant/${id}`, ens);
  }
  
  updateMemberEtd(id: string, etd: Etudiant): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/etudiant/${id}`, etd);
  }

  getEnsList(): Observable<EnseignantChercheur[]>{
    return this.httpClient.get<EnseignantChercheur[]>(`${this.baseURL}/enseignant`);
  }


}
