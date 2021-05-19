import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InnovatorProperties } from '../models/InnovatorProperties';
import { SolutionService } from '../services/solution.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  public innovator=new InnovatorProperties;
  constructor(private service:SolutionService) { }

  ngOnInit(): void {
  }
  onsubmit(form:NgForm){
    if(form.valid){
    this.service.addDetails(this.innovator).subscribe(data=>{
      // console.log(data);     
    });
    }
    else{
      alert('Please fix the errors!!');
    }
}
}
