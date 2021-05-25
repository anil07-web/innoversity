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
  public health:Array<string>;
  public engineering:Array<string>;
  public electricity:Array<string>;
  public science:Array<string>;
  public aerospace:Array<string>;
  public habitat:Array<string>;
  public environment:Array<string>;

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
      
      this.health=this.challenge.filter(d=>d.domain=="Health");
      if(this.health.length==0){
        this.healthIsNull=false;
      }
      this.engineering=this.challenge.filter(d=>d.domain=="Engineering");
      if(this.engineering.length==0){
        this.engineeringIsNull=false;
      }
      this.science=this.challenge.filter(d=>d.domain=="Science");
      if(this.science.length==0){
        this.scienceIsNull=false;
      }
      this.electricity=this.challenge.filter(d=>d.domain=="Electricity");
      if(this.electricity.length==0){
        this.electricityIsNull=false;
      }
      this.aerospace=this.challenge.filter(d=>d.domain=="Aerospace");
      if(this.aerospace.length==0){
        this.aerospaceIsNull=false;
      }
      this.habitat=this.challenge.filter(d=>d.domain=="Habitat");
      if(this.habitat.length==0){
        this.habitatIsNull=false;
      }
      this.environment=this.challenge.filter(d=>d.domain=="Environment");
      if(this.environment.length==0){
        this.environmentIsNull=false;
      }
    });
  }
}
