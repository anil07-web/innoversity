import { Component, OnInit } from '@angular/core';
import { UserprofileService } from 'src/app/services/userprofile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private service:UserprofileService, private router: Router) { }

 public user; 
 public solution; 

  ngOnInit(): void {
    this.getUser();
    this.getSolutions();
  }

   getUser(){
    return this.service.getUserDate().subscribe(data=>{
      this.user=data;
      console.log(this.user);
    })
   }


   getSolutions(){
    return this.service.getUserSolution().subscribe(data=>{
      this.solution=data;
      console.log(this.solution);
    })
   }


   feedbackView(details) {
    console.log("solution Id:", details.solutionId);
    this.router.navigateByUrl(`feedback/${details.solutionId}`);
  }


}
