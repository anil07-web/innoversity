import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Challenge } from 'src/app/models/Challenge';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MdChipsModule } from '@angular/material';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: DashboardService, private router: Router) { }
  public loggedInUser: String;
  public recommended;
  public health:Array<any>=[];
  public engineering:Array<string>=[];
  public electricity:Array<string>=[];
  public science:Array<string>=[];
  public aerospace:Array<string>=[];
  public habitat:Array<string>=[];
  public environment:Array<string>=[];
  public temp:Array<string>=[];

  public healthIsNull:boolean=true;
  public engineeringIsNull:boolean=true;
  public aerospaceIsNull:boolean=true;
  public habitatIsNull:boolean=true;
  public environmentIsNull:boolean=true;
  public electricityIsNull:boolean=true;
  public scienceIsNull:boolean=true;
  public challenge;
  public email;


  


  public searchresult;
  setQuery(querytext){
    this.service.getSearchResult(querytext).subscribe(data=> {
        this.searchresult = data;
        console.log(this.searchresult);
      });
    }
  


  ngOnInit(): void {
    this.getContacts();
    this.getChallenge();
    this.loggedInUser=localStorage.getItem("userName");
  }
  getContacts() {
    this.email="vikhil@gmail.com";
    this.service.getContacts(this.email).subscribe(data => {
    //  this.email=data;
    //  console.log(this.email.map(m=>console.log(m)));
      this.recommended = data;
    });
  }

  getChallenge() {
    this.service.getChallenge().subscribe(data => {
       this.challenge = data;
      
      // this.health=this.challenge.filter(d=>d.challengeDomain.filter(m=>m=="Health"));
      // if(this.health.length==0){
      //   this.healthIsNull=false;
      // }
      this.challenge.map(d=>{
        d.challengeDomain.map(m=>{
        if(m=="Health")
        {
          this.health.push(d);
        }
        if(m=="Engineering")
        {
          this.engineering.push(d);
        }
        if(m=="Science")
        {
          this.science.push(d);
        }
        if(m=="Electricity")
        {
          this.electricity.push(d);
        }
        if(m=="Aerospace")
        {
          this.aerospace.push(d);
        }
        if(m=="Habitat")
        {
          this.habitat.push(d);
        }
        if(m=="Environment")
        {
          this.environment.push(d);
        }       
        
      });
      });
      
      console.log(this.health);
      console.log(this.engineering);
      console.log(this.science);
      console.log(this.electricity);
      console.log(this.aerospace);
      console.log(this.habitat);
      console.log(this.environment);


      if(this.engineering.length==0){
        this.engineeringIsNull=false;
      }
      if(this.science.length==0){
        this.scienceIsNull=false;
      }
     
      if(this.electricity.length==0){
        this.electricityIsNull=false;
      }
     
      if(this.aerospace.length==0){
        this.aerospaceIsNull=false;
      }
     
      if(this.habitat.length==0){
        this.habitatIsNull=false;
      }

      if(this.environment.length==0){
        this.environmentIsNull=false;
      }
    });
  }

  solution(challenge) {
    console.log("User clicked on:", challenge.challengeId);
    if (this.loggedInUser == challenge.challengerName) {
      console.log("move to solution analysis");
      this.router.navigateByUrl(`/solutionAnalysis/${challenge.challengeId}`)
    } else{
      console.log("move to upload solution");
      this.router.navigateByUrl(`/solution/${challenge.challengeId}`);

    }
  }
}

export class ChipsOverviewExample {}