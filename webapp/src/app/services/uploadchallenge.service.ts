
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadchallengeService {

  constructor(private http: HttpClient) { }
  addChallenge(Challenge) {
    return this.http.post( '',Challenge);
  }
}