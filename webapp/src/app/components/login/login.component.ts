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
  public showPass:boolean=false;
  public show:number=0;
  public invalid:string;
  ngOnInit(): void {
  }
  addUserCredentials(form:NgForm){
    if(form.valid){
      this.logindata.addUserCredentials(this.login).subscribe((data : any)=>{
        console.log(data);
        this.invalid=data?.token;
        console.log(this.invalid);
        localStorage.setItem('token', data?.token);   
        localStorage.setItem('email',this.login?.email); 
      });
      }
      else{
        alert('Please fix the errors!!');
      }
    }
    public showPassword(){
      if(this.show%2==0)
          this.showPass=true;
      else
        this.showPass=false;
      this.show++;
    }
}
