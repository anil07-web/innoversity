import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: DashboardService, private router: Router) { }
  public loggedInUser: String;
  public recommended: Array<string> = [];
  public recomChallenge;
  public challengerName;
  public recomChallenger;
  public health: Array<any> = [];
  public engineering: Array<string> = [];
  public electricity: Array<string> = [];
  public science: Array<string> = [];
  public aerospace: Array<string> = [];
  public habitat: Array<string> = [];
  public environment: Array<string> = [];
  public temp: Array<string> = [];

  public healthIsNull: boolean = true;
  public engineeringIsNull: boolean = true;
  public aerospaceIsNull: boolean = true;
  public habitatIsNull: boolean = true;
  public environmentIsNull: boolean = true;
  public electricityIsNull: boolean = true;
  public searchIsNull: boolean = false;
  public scienceIsNull: boolean = true;
  public recomIsNull: boolean = true;
  public challenge;
  public email;
  public count;
  public searchresult;
  setQuery(querytext) {
    this.count = querytext.split(' ').length;
    if (this.count == 1) {
      this.service.getSearchResult(querytext).subscribe(data => {
        this.searchresult = data;
        console.log(this.searchresult);
      });
    }
    else {
      this.service.getSearchResultByNLP(querytext).subscribe(data => {
        this.searchresult = data;
        console.log(this.searchresult);
      });
    }
  }
  
  ngOnInit(): void {
    this.getContacts();
    this.getChallenge();
    this.loggedInUser = localStorage.getItem("userName");
  }
  getContacts() {
    this.email=this.loggedInUser;
    this.service.getContacts(this.email).subscribe(data => {
      this.recomChallenge = data;
      this.recomChallenge.map(m => {
        this.recomChallenger = m.challengerName;
        console.log(this.recomChallenge);
        if (this.recomChallenger != this.loggedInUser) {
          this.recommended.push(m);
        }
        if(this.recommended.length==0){
          this.recomIsNull=false;
          console.log(this.recomIsNull);
        }
      });

    });
  }

  getChallenge() {
    this.service.getChallenge().subscribe(data => {
      this.challenge = data;
      console.log(this.challenge);
      console.log(this.loggedInUser);
      this.challenge.map(d => {
        this.challengerName = d.challengerName;
        console.log(this.challengerName);
        if (this.challengerName != this.loggedInUser) {
          d.challengeDomain.map(m => {
            if (m == "Health") {
              this.health.push(d);
            }
            if (m == "Engineering") {
              this.engineering.push(d);
            }
            if (m == "Science") {
              this.science.push(d);
            }
            if (m == "Electricity") {
              this.electricity.push(d);
            }
            if (m == "Aerospace") {
              this.aerospace.push(d);
            }
            if (m == "Habitat") {
              this.habitat.push(d);
            }
            if (m == "Environment") {
              this.environment.push(d);
            }

          });
        }
      });

      if (this.health.length == 0) {
        this.healthIsNull = false;
      }
      if (this.engineering.length == 0) {
        this.engineeringIsNull = false;
      }
      if (this.science.length == 0) {
        this.scienceIsNull = false;
      }

      if (this.electricity.length == 0) {
        this.electricityIsNull = false;
      }

      if (this.aerospace.length == 0) {
        this.aerospaceIsNull = false;
      }

      if (this.habitat.length == 0) {
        this.habitatIsNull = false;
      }

      if (this.environment.length == 0) {
        this.environmentIsNull = false;
      }
    });
  }
  getChallengeById(challengeId) {
    console.log("User clicked on:", challengeId.challengeId);
      this.service.getUpdatedChallenge(challengeId.challengeId).subscribe(data=>{
        console.log(data);
      })
      this.router.navigateByUrl(`/challengeDes/${challengeId.challengeId}`);
  }
}