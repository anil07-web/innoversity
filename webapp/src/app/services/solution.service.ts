import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor(private http:HttpClient) { }
  addDetails(innovator){
    return this.http.post("http://localhost:8900/api/v1/solve",innovator);
  }
  addfeed(feedback,id){
    return this.http.put(`http://localhost:8900/api/v1/solve/${id}`,feedback);
  }
  getDetails(){
    return this.http.get("http://localhost:8900/api/v1/solved");
  }
  getByid(id){
    return this.http.get(`http://localhost:8900/api/v1/solved/${id}`);
  }
}
