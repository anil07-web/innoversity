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
  getContacts(email)  {
    return this.http.get(`api/v1/recommendation/recommend?email=${email}`);
  }
  getChallenge()  {
    return this.http.get('/api/v1/challenge/challenges');
  }



  getSearchResult(queryvalue){
    return this.http.get(`/api/v1/search/search/${queryvalue}`);
  }
 
 

}
