import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { feedback } from 'src/app/models/feedback';
import { SolutionService } from 'src/app/services/solution.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  constructor(
    private service: SolutionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  // public comment;
  // public commentedBy;
  public feed: feedback = new feedback();
  public info;
  public info1;
  public num;
  public comments;
  public commentedby;
  public obj;
  public isEdit: any;
  public solutionId: any;
  public loggedInUser: string;
  public feedBackList: Array<any>[];
  ngOnInit(): void {
    // this.getinfo();
    this.solutionId = this.activatedRoute.snapshot.params.solutionId;
    // console.log("solutionId:", this.solutionId);
    this.loggedInUser = localStorage.getItem('userName');
    this.getByid();
  }
  getinfo() {
    this.service.getDetails().subscribe((data) => {
      let list = [];
      this.info = data;
      list = this.info;
      list.forEach((a) => {
        this.num = a.solutionId;
        this.obj = a.solution;
        console.log(this.obj);
      });
    });
  }
  getByid() {
    this.service.getByid(this.solutionId).subscribe((data) => {
      // debugger;
      this.info1 = data;
      console.log('The information is', this.info1);
      this.feedBackList = this.info1.feedback;
      console.log('the feedback is', this.feedBackList);
    });
  }

  onsubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.solutionId);
      console.log('logged In user:', this.loggedInUser);
      this.feed.commentedBy = this.loggedInUser;
      this.service.addfeed(this.solutionId, this.feed).subscribe((data) => {
        this.isEdit = 'Comment Posted!!!!!';
        console.log("comment posted");
        this.getByid;
      });
    } else {
      this.isEdit = 'Please Enter Correct Details!!';
    }
  }
  updateSolution() {
    this.router.navigateByUrl(`update/${this.solutionId}`);
  }
}
  function subscribe(arg0: (data: any) => void) {
    throw new Error('Function not implemented.');
  }
  