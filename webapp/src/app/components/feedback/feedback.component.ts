import { Component, OnInit } from '@angular/core';
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

public feed=new feedback;
public info;
public num;


  ngOnInit(): void {
    this.getinfo();
  }
  getinfo() {
    this.service.getDetails().subscribe(data => {
      let list=[];
      this.info = data;
      list=this.info; 
     list.forEach(a=>{
      console.log(a.solutionId);
this.num=a.solutionId;
     });

    });
  }
  onsubmit(form:NgForm){
    if(form.valid){
      this.service.addfeed(this.num,this.feed).subscribe(data=>{
        console.log(data);
        alert("Data Stored Successfully");
       });
      }
      else{
        alert("Invalid");
      }
    
  }
 
 

}
function subscribe(arg0: (data: any) => void) {
  throw new Error('Function not implemented.');
}

