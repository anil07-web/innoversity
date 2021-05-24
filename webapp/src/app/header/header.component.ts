import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  @Input()
  public isLoggedIn;

  email: String;
  loggedInUser: String;
  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.email=localStorage.getItem("userName");
      const splitUsername = this.email.split("@");
      this.loggedInUser = splitUsername[0];
      console.log("Logged in user:", this.loggedInUser);
    }
    
  }

  toDashboard() {
    console.log("go to dashboard...")
    if(this.isLoggedIn) {
      this.router.navigateByUrl("/dashboard");
    }
  }

}
