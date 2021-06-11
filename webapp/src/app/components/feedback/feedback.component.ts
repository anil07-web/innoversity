import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { feedback } from 'src/app/models/feedback';
import { SolutionAnalysisService } from 'src/app/services/solution-analysis.service';
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
  public fileName;
  public value = false;
  public showUpdate = false;

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
      if (this.info1.file != null) {
        this.fileName = this.info1.file;
        console.log('filename:', this.fileName);
      }
      if (this.loggedInUser == this.info1.solvedBy) {
        this.showUpdate = true;
      }
    });
  }

  onsubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.solutionId);
      console.log('logged In user:', this.loggedInUser);
      this.feed.commentedBy = this.loggedInUser;
      this.service.addfeed(this.solutionId, this.feed).subscribe((data) => {
        // this.refreshPage();
        this.getByid();
      });
    } else {
      this.isEdit = 'Please Enter Correct Details!!';
    }
  }
  updateSolution() {
    this.router.navigateByUrl(`update/${this.solutionId}`);
  }
  hireInnovator() {
    // const status = value?"Hired":"Rejected";
    // if(value=="true"){
    //   const status="Hired";
    // }

    this.value = true;

    const status = this.value ? 'Hired' : 'Accepted';
    this.service.updateStatus(this.solutionId, status).subscribe((data) => {
      alert('Innovator is Hired');
    });
  }
  openFile() {
    console.log('open file here');
    window.open(this.info1.uploadUrl, '_blank');
  }

  downloadDocument() {
    console.log("challengeId:"+this.solutionId);
    this.service.downloadFile(this.solutionId).subscribe((response) => {
      let blob: any = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', url);
      link.setAttribute('download', this.fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    }),
      (error) => console.log('Error downloading the file'),
      () => console.info('File downloaded successfully');
  }
  // refreshPage(){
  //   this.router.navigateByUrl(`feedback/${this.solutionId}`);
  //    window.location.reload()
  // }
}

function subscribe(arg0: (data: any) => void) {
  throw new Error('Function not implemented.');
}
