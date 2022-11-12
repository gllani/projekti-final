import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private currentUser: firebase.User = null;
  // isLoggedIn() {
  //   if (this.currentUser == null) {
  //     return false;
  //   }
  //   return true;
  // }
  // constructor(public afAuth: AngularFireAuth) {}
  // logout() {
  //   this.afAuth.auth.signOut();
  // }
}
