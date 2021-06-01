import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor(private http:HttpClient) { }
  addDetails(innovator){
    return this.http.post('/api/v1/solution/solve',innovator);
  }
  // addfeed(id,feedback){
  //   return this.http.put(`/api/v1/solution/solved/${id}`,feedback, { responseType: 'text' });
  // }
  addfeed(id,feedback){
    return this.http.put(`/api/v1/solution/solve/${id}`,feedback);
  }
  // addfeed(id,feedback){
  //   return this.http.put('/api/v1/solution/solved/'+id,feedback);

  // }
  getinfo(id){
    return this.http.get(`/api/v1/challenge/challenge/${id}`);
  }
  getDetails(){
    return this.http.get('/api/v1/solution/getsolution');
  }
  getByid(id){
    return this.http.get(`/api/v1/solution/solve/${id}`);
  }
 
}
