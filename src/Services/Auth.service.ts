import { HttpClient, HttpResponse } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

import * as auth from 'firebase/auth';
import { shareReplay, tap } from 'rxjs/operators';
import { WebRequestService } from './web-request.service';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public userClaims: any;
    readonly ROOT_URL;
  //  public userClaims$ = new Subject<any>();

    constructor(
        public afAuth: AngularFireAuth,private webRequestService: WebRequestService, private router: Router, private http: HttpClient
    ) {
        this.ROOT_URL = 'http://localhost:3000';
    }


    getUserClaims(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.onAuthStateChanged(user => {
                if (!!user) {
                    this.setUserClaims(user);
                    resolve(user);
                } else {
                    reject('No user logged in');
                }
            });
        });
    }

    getUserToken(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.afAuth.onAuthStateChanged(user => {
                if (!!user) {
                    user.getIdToken().then(token => resolve(token)).catch(() => reject('No token Available.'));
                } else {
                    reject('No user logged in');
                }
            });
        });
    }

    setUserClaims(user: any): void {
        this.userClaims = user;
    //    this.userClaims$.next(user);
    }


    // doFacebookLogin(): Promise<any> {
    //     return this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    // }
    //
    // doTwitterLogin(): Promise<any> {
    //     return this.afAuth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    // }

    doGoogleLogin(): Promise<any> {
        return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    

    doLogout(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (!!this.afAuth.currentUser) {
                this.afAuth.signOut().then(() => {
                    this.setUserClaims(null);
                    resolve();
                }, err => reject(err));
            } else {
                reject();
            }
        });
    }

    login(email: string, password: string) {
        return this.webRequestService.login(email, password).pipe(
          shareReplay(),
          tap((res: HttpResponse<any>) => {
            // the auth tokens will be in the header of this response
            this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            console.log("LOGGED IN!");
          })
        )
      }
    
    
      setAccessToken(accessToken: string) {
        localStorage.setItem('x-access-token', accessToken)
      }
      
      private setSession(userId: string, accessToken: any, refreshToken: any) {
        localStorage.setItem('user-id', userId);
        localStorage.setItem('x-access-token', accessToken);
        localStorage.setItem('x-refresh-token', refreshToken);
      }
    
      private removeSession() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('x-refresh-token');
      }
    
    
      logout() {
        this.removeSession();
    
        this.router.navigate(['/login']);
      }
    

}
 