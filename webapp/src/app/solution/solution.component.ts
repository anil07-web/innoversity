import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { InnovatorProperties } from '../models/InnovatorProperties';
import { SolutionService } from '../services/solution.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  public innovator=new InnovatorProperties;
  public challenge="Smart Helmet";
  public isEdit:any;
  constructor(private service:SolutionService) { }

  ngOnInit(): void {
  }
  onsubmit(form:NgForm){
    if(form.valid){
      const loggedInUser = localStorage.getItem("userName");
      console.log("Solved by:", loggedInUser);
      this.innovator.solvedBy = loggedInUser;
    this.service.addDetails(this.innovator).subscribe(data=>{
     this.isEdit="Data Stored Successfully";
    });
    }
    else{
      this.isEdit="Please Enter Correct Details!!";
    }
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
