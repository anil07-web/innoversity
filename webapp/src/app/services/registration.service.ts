import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  constructor(private http :HttpClient) { }

   registerUser(user : User):Observable<any>{
    return this.http.post<any>('http://localhost:8080/registered',user);
  }

}
