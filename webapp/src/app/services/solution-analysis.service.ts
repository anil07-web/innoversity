import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolutionAnalysisService {

  constructor(private http:HttpClient) { }

  getSolution(){
    return this.http.get('http://localhost:8900/api/v1/getsolution');
  }

  updateStatus(solutionId,solStatus){
    return this.http.put(`http://localhost:8900/solve/${solutionId}`,solStatus);
  }
}
