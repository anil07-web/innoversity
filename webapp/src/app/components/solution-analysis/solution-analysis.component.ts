import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { defaultMaxListeners } from 'events';
import { SolutionAnalysisService } from 'src/app/services/solution-analysis.service';

@Component({
  selector: 'app-solution-analysis',
  templateUrl: './solution-analysis.component.html',
  styleUrls: ['./solution-analysis.component.css']
})
export class SolutionAnalysisComponent implements OnInit {

  constructor(private service : SolutionAnalysisService, private activateRoute: ActivatedRoute,
              private router: Router) { }

  public solutionDetails;
  public challengeId;
  public challengeTitle;
  public solutionDetailsBychallenge;
  
  ngOnInit(): void {
    this.challengeId = this.activateRoute.snapshot.params.challengeId;
    console.log("challenge Id:", this.challengeId);
    // this.getSolution();
    this.getSolutionByChallengeId(this.challengeId);
  }

  getSolution(){
    this.service.getSolution().subscribe(data=>{
      console.log(data);
      this.solutionDetails=data;
    });
  }

  getSolutionByChallengeId(challengeId){
    this.service.getSolutionByChallengeId(this.challengeId).subscribe(data=>{
      // console.log(data);
      this.solutionDetailsBychallenge=data;
    });
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
        const status = value?"Accepted":"Rejected";
        this.service.updateStatus(details.solutionId, status).subscribe(data => {this.getSolutionByChallengeId(this.challengeId)});
    }

    feedbackView(details) {
      console.log("solution Id:", details.solutionId);
      this.router.navigateByUrl(`feedback/${details.solutionId}`);
    }
  }
