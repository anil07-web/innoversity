import { Component, OnInit } from '@angular/core';
import { UserprofileService } from 'src/app/services/userprofile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private service:UserprofileService) { }

 public user; 
 public challenge;

  ngOnInit(): void {
    this.getUser();
    this.getChallenge();
  }

   getUser(){
    return this.service.getUserData().subscribe(data=>{
      this.user=data;
      console.log(this.user);
    })
  }

    getChallenge(){
      return this.service.getChallenge().subscribe(data=>{
        this.challenge=data;
        console.log(this.challenge);
      })
   }
}
