import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { feedback } from 'src/app/models/feedback';
import { SolutionService } from 'src/app/services/solution.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private service:SolutionService) { }
// public comment;
// public commentedBy;
public feed:feedback=new feedback();
public info;
public num;
public obj;
public isEdit:any;
@Input()
datas:string;
  ngOnInit(): void {
    this.getinfo();
   console.log(this.datas);
  }
  getinfo() {
    this.service.getDetails().subscribe(data => {
      let list=[];
      this.info = data;
      list=this.info; 
     list.forEach(a=>{
this.num=a.solutionId;
this.obj=a.solution;
console.log(this.obj);
     });
    });
  }
  submit(){
  
    this.feed;
    this.num;
  }

  onsubmit(form:NgForm){
    if(form.valid){
      console.log(this.num);
      this.service.addfeed(this.num,this.feed).subscribe(data=>{

        this.isEdit="Comment Posted!!!!!";
       });
      }
      else{
        this.isEdit="Please Enter Correct Details!!";
      }
  }
}
function subscribe(arg0: (data: any) => void) {
  throw new Error('Function not implemented.');
}
