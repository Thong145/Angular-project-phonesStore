import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthService) { }
  signedin=false

  ngOnInit(): void {
    if(localStorage.getItem('user')!=null)
    this.signedin=true
    else this.signedin=false
  }
  signup(email:string, password:string){
    this.auth.signupFirebase(email,password)
    if(this.auth.loggedin) this.signedin=true
    alert('Đăng kí Thành Công');
  }

}
