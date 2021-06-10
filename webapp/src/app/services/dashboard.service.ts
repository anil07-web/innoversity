import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from '../models/Challenge';
import { Search } from '../models/Search';
// import { Observable } from 'rxjs';
// import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  getContacts(email) {
    return this.http.get(`api/v1/recommendation/recommend?email=${email}`);
  }
  getChallenge() {
    return this.http.get('/api/v1/challenge/challenges');
  }

  getSearchResult(queryvalue): Observable<Search> {
    return this.http.get<Search>(`/api/v1/search/search/${queryvalue}`);
  }

<<<<<<< HEAD
  getUpdatedChallenge(challengeId){
    return this.http.get(`/api/v1/challenge/update/${challengeId}`);
  }

  getUpdatedAttempt(challengeId){
    return this.http.get(`/api/v1/challenge/update/attempt/${challengeId}`);
  }


=======
  getSearchResultByNLP(queryvalue):Observable<any>{
    return this.http.get<any>(`/api/v1/search/filter/${queryvalue}?type=NN`);
  }
>>>>>>> ea622c18ccadc7aeca6d19d2d85a1caf42def6a6
 
 

}
