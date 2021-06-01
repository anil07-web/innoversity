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

  ngOnInit(): void {
    this.getUser();
  }

   getUser(){
    return this.service.getUserDate().subscribe(data=>{
      this.user=data;
      console.log(this.user);
    })
   }
}
