import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { defaultMaxListeners } from 'events';
import { SolutionAnalysisService } from 'src/app/services/solution-analysis.service';

@Component({
  selector: 'app-solution-analysis',
  templateUrl: './solution-analysis.component.html',
  styleUrls: ['./solution-analysis.component.css']
})
export class SolutionAnalysisComponent implements OnInit {

  constructor(private service : SolutionAnalysisService) { }

  public solutionDetails;
  public accept=true;
  public btnDisabled=false;
  public isClicked=true;
  public isAccepted=true;

  ngOnInit(): void {
    this.getSolution();
  }

  getSolution(){
    this.service.getSolution().subscribe(data=>{
      console.log(data);
      this.solutionDetails=data;
    });
  }

  buttonClick(){
    this.btnDisabled=true;
    this.isAccepted=false;
  }

  // updateStatus(details){
  //   this.service.updateStatus(details.solutionId,{
  //       solStatus:details.solStatus?"Accepted":"Rejected",
  //     }).subscribe(data=>{
  //       this.getSolution();
  //       console.log(data);
  //     })
  //   }

    solAccepted(details, value) {
      this.btnDisabled=true;
      this.isAccepted=false;
      this.accept=false;
      const status = value?"Accepted":"Rejected";
      this.service.updateStatus(details.solutionId, status).subscribe(data => {this.getSolution()})
    }
  }
