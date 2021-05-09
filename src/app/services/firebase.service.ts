import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;

  constructor(private router:Router, private firebaseAut: AngularFireAuth, private afs: AngularFirestore) {
    this.firebaseAut.setPersistence("session");
  }

  async login(email: string, password: string){
    return this.firebaseAut.signInWithEmailAndPassword(email,password);
    // .then(result => {
    //   this.isLoggedIn = true
    //   localStorage.setItem('user', JSON.stringify(result.user))
    // })
  }

  async logout (){
    return this.firebaseAut.signOut();
  }

  async signUp(name: string, surname: string, email: string, password: string ){
    this.firebaseAut.createUserWithEmailAndPassword(email, password).then(result => {
      const newUser: User = {
        name,
        surname,
        email,
        uid: result.user?.uid
      };
      this.setUserData(newUser);
    });
  }

  setUserData(user: User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    return userRef.set(user, {
      merge: true
    });
  }

}
