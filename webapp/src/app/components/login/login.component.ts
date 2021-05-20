import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private logindata: LoginService) { }
  public login=new Login;
  ngOnInit(): void {
  }
  addUserCredentials(form:NgForm){
    if(form.valid){
      this.logindata.addUserCredentials(this.login).subscribe(data=>{
        console.log(data);     
      });
      }
      else{
        alert('Please fix the errors!!');
      }
  }
}
