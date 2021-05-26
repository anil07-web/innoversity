import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/models/Challenge';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: DashboardService) { }
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
  ngOnInit(): void {
    this.getContacts();
    this.getChallenge();
  }
  getContacts() {
    this.service.getContacts().subscribe(data => {
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
}
