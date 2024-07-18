import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedin=false;

  constructor(private afAuth: AngularFireAuth,
    private router:Router) {
    
   }

   async signinGmail(){
    var provider = new firebase.auth.GoogleAuthProvider();
    return await  this.afAuth.signInWithPopup(provider);
      //       .then(res=>{
      //         console.log(" da dang nhap thanh cong")
      // //  this.router.navigate(['home']);
      //         // this.router.navigate(['home']);
      // })
  }

  async signinFirebase(email: string, password:string){
    await this.afAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.loggedin=true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }

  async signupFirebase(email: string, password:string){
    await this.afAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.loggedin=true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }

  logoutFirebase(){
    this.afAuth.signOut()
    localStorage.removeItem('user')
  }

  logout(){
    return new Promise<any>((resolve,reject)=>{
      if (this.afAuth.user){
      //if (this.fauth.auth.currentUser){
        this.afAuth.signOut();
        resolve("log out");
      }else{
        reject();
      }
  
    })
  }
}
