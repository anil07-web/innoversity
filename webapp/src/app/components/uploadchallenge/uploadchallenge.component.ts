import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Challenge } from 'src/app/models/Challenge';
import { UploadchallengeService } from 'src/app/services/uploadchallenge.service';

@Component({
  selector: 'app-uploadchallenge',
  templateUrl: './uploadchallenge.component.html',
  styleUrls: ['./uploadchallenge.component.css']
})
export class UploadchallengeComponent implements OnInit {

  public challenge = new Challenge;
  constructor(private service:UploadchallengeService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.service.addChallenge(this.challenge).subscribe(data => {
        
      });
    } else {
      // if (form.form.controls.firstname.invalid) {
      //   form.form.controls.firstname.markAsDirty();
      // }
      alert('Please fix the errors');
    }
  }
}
