import { Component,Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DashboardService } from '../services/dashboard.service';
import { SpeechDialogComponent } from '../speech-dialog/speech-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router , private searchservice: DashboardComponent, public dialog: MatDialog) { }
  @Input()
  public isLoggedIn;

  email: String;
  loggedInUser: String;
  ngOnInit(): void {
    if (this.isLoggedIn) {
      // this.email=localStorage.getItem("userName");
      // const splitUsername = this.email.split("@");
      // this.loggedInUser = splitUsername[0];
      // console.log("Logged in user:", this.loggedInUser);
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

  openSearchDialog(){
    console.log("dialog open");
    const dialogRef = this.dialog.open(SpeechDialogComponent, {
      width: '500px',
      data: {
        voiceText: '',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("result from dialog:", result.voiceText);
      // this.searchData = result.voiceText;
      // this.getSearchData();
    });
  }
}
