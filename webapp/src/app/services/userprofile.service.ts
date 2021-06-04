import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private http:HttpClient) { }

  public email=localStorage.getItem('userName');
  getUserDate(){
    console.log(this.email);
    return this.http.get(`api/v1/register/users/${this.email}`)
  }

  getUserSolution(){
    return this.http.get(`api/v1/solution/solutions/${this.email}`)
  }


}
