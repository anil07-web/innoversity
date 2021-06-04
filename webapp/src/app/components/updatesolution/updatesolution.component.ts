import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InnovatorProperties } from 'src/app/models/InnovatorProperties';
import { SolutionService } from 'src/app/services/solution.service';

@Component({
  selector: 'app-updatesolution',
  templateUrl: './updatesolution.component.html',
  styleUrls: ['./updatesolution.component.css']
})
export class UpdatesolutionComponent implements OnInit {

  // public innovator=new InnovatorProperties();
  constructor(private activatedRoute:ActivatedRoute, private service: SolutionService, private fb: FormBuilder) { }
  public solutionId:any;
  public desc;
  public info;
  public updateForm;
  public variable:string;
  // public innovator=new InnovatorProperties();
  ngOnInit(): void {
    this.solutionId=this.activatedRoute.snapshot.params.solutionId;
    this.getById();
    // console.log("Solution Id :",this.solutionId);
  }

  initForm() {
    this.updateForm = this.fb.group({
     description: ['']  
    });
    this.variable=this.updateForm.value;
    this.updateForm.get('description').setValue(this.desc);
    console.log("Update the sol",this.desc);
  }

  onSubmit() {
    console.log(this.updateForm.get('description').value);
      this.service.updateDescription(this.solutionId,this.updateForm.get('description').value).subscribe((data) => {
        console.log(this.solutionId);
        });
      }
      getById(){
        this.service.getByid(this.solutionId).subscribe((data)=>{
          this.info=data;
          this.desc=this.info.description;
          console.log("The information is",this.desc);
          this.initForm();
        });
      }
    }

  // onsubmit(form:NgForm){
  //   if(form.valid){
  //     this.service.updateDescription(this.solutionId,this.innovator.description).subscribe((data)=>{
  //       alert("data is stored");
  //       console.log("Solution Id :",this.solutionId);
  //       this.desc=this.info.description;
  //     });
  //   }
  //   else{
  //     alert("wrong");
  //   }
  // }
  
