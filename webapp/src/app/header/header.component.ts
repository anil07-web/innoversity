import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router , private searchservice: DashboardComponent) { }
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

  show(text){
    console.log(text);
    this.searchservice.setQuery(text);
  }

}
