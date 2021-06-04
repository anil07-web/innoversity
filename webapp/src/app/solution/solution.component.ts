import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FeedbackComponent } from '../components/feedback/feedback.component';

import { InnovatorProperties } from '../models/InnovatorProperties';
import { SolutionService } from '../services/solution.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css'],
})
export class SolutionComponent implements OnInit {
  public innovator = new InnovatorProperties();
  public challenge = 'Smart Helmet';
  public isEdit: any;
  public info;
  public challengeName;
// public challengeInfo=[];
  public loggedInUser;
  public challengeId;
  // logg = 'Hi Arshad';
  constructor(
    private service: SolutionService,
    private feedservice: FeedbackComponent,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}
  // setLog() {
  //   this.feedservice.getLog(this.logg);
  // }
  ngOnInit(): void {
    this.challengeId = this.activateRoute.snapshot.params.challengeId;
    // console.log("challenge Id:", this.challengeId);
    this.getinfo();
    // this.setLog();
  }
  onsubmit(form: NgForm) {
    if (form.valid) {
      this.loggedInUser = localStorage.getItem('userName');
      console.log('Solved by:', this.loggedInUser);
      this.innovator.solvedBy = this.loggedInUser;
      this.innovator.challengeId = this.challengeId;
      this.innovator.challengeTitle = this.info.challengeTitle;
      this.service.addDetails(this.innovator).subscribe((data) => {
        this.isEdit = 'Data Stored Successfully';
        this.router.navigateByUrl("/dashboard");
      });
    } else {
      this.isEdit = 'Please Enter Correct Details!!';
    }
  }
  getinfo(){
    
    this.service.getinfo(this.challengeId).subscribe((data) => {
      // debugger;
      // let list = [];
      this.info = data;
      console.log("challenge Info:", this.info);
      // console.log("Data is"+data);
      // console.log("tHE CHALLENGE DETAILS"+this.info);/
      // list = this.info;
      // list.forEach((a) => {
        // this.challengeName = a.challengeTitle;
    // });
    });
  }

  // config: AngularEditorConfig = {
  //   editable: true,
  //   spellcheck: true,
  //   height: '2rem',
  //   minHeight: '2rem',
  //   width: '25rem',
  //     minWidth: '25rem',
  //   placeholder: 'Enter text here...',
  //   translate: 'yes',
  //     enableToolbar: false,
  //     showToolbar: false,
  //   defaultParagraphSeparator: 'p',
  //   defaultFontName: 'Arial',
  //   toolbarHiddenButtons: [
  //     ['bold']
  //     ],
  //   customClasses: [
  //     {
  //       name: "quote",
  //       class: "quote",
  //     },
  //     {
  //       name: 'redText',
  //       class: 'redText'
  //     },
  //     {
  //       name: "titleText",
  //       class: "titleText",
  //       tag: "h1",
  //     },
  //   ],

  // };
}
