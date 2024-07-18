import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { SharingService } from '../Services/sharing.service';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayName:string="";
  signedin=false

  @Output() isLogout = new EventEmitter<void>()

  constructor(private UserService:UserService, private auth:AuthService,private router:Router, private sharing:SharingService) {

    if(localStorage.getItem('user')!=null)
    this.signedin=true
    else this.signedin=false



    this.UserService.getCurrentUser()
              .then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);
    
    this.sharing.isUserLoggedIn
				.subscribe(value => {
						if(value){
							this.UserService.getCurrentUser()
              .then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);
            }
            else{
              this.displayName="";
            }
          })
  }

  ngOnInit(): void {
  }

  logoutFirebase(){
    this.auth.logoutFirebase()
    this.isLogout.emit()
    //this.router.navigateByUrl("login");
  }

  handleLogout(){
    this.signedin = false
  }

  logout(){
    this.auth.logout();
    //this.router.navigateByUrl("login");
  }

}
