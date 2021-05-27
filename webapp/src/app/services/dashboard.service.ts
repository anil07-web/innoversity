import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from '../models/Challenge';
// import { Observable } from 'rxjs';
// import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  getContacts()  {
    return this.http.get('http://localhost:3000/recommended');
  }
  getChallenge()  {
    return this.http.get('http://localhost:8095/api/v1/Challenges');
  }



  getSearchResult(queryvalue){
    return this.http.get(`http://localhost:8087/challenges/search/${queryvalue}`);
  }
 
 

}
