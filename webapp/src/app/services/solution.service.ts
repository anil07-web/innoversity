import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor(private http:HttpClient) { }
  addDetails(innovator){
    return this.http.post("/api/v1/solution/solve",innovator);
  }
  addfeed(feedback,id){
    return this.http.put(`/api/v1/solution/solve/${id}`,feedback);
  }
  getDetails(){
    return this.http.get("/api/v1/solution/solved");
  }
  getByid(id){
    return this.http.get(`/api/v1/solution/solved/${id}`);
  }
}
