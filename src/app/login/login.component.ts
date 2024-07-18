import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router: Router) { }

  signedin=false
  ngOnInit(): void {
    if(localStorage.getItem('user')!=null)
    this.signedin=true
    else this.signedin=false
  }

  tryGoogleLogin(){
    this.auth.signinGmail().then(
      res=>{
        console.log(" da dang nhap thanh cong")
        this.router.navigateByUrl("/admin")
      }
    )
    .catch(err=>{console.log(err)})
  }

  tryFirebaseLogin(email:string, password:string){
    this.auth.signinFirebase(email,password)
    .then(
      res=>{
        console.log(" da dang nhap thanh cong")
        this.router.navigateByUrl("/admin")
      }
    )
    .catch(err=>{console.log(err)})
  }

}
