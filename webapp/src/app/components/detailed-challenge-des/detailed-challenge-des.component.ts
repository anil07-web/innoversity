import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailed-challenge-des',
  templateUrl: './detailed-challenge-des.component.html',
  styleUrls: ['./detailed-challenge-des.component.css']
})
export class DetailedChallengeDesComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
    private router: Router) { }

  public challengeId;
  ngOnInit(): void {
    this.challengeId = this.activateRoute.snapshot.params.challengeId;
    console.log(this.challengeId);
  }

}
