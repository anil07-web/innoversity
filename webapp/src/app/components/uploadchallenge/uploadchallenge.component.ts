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
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  public challenge = new Challenge;
  constructor(private service:UploadchallengeService) { }

  ngOnInit(): void {
    this.dropdownList = ["Science","Engineering", "Aerospace","Habitat","Electricity","Power Sources","Environment"];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',

    };
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.service.addChallenge(this.challenge).subscribe(data => {
       
      });
    } 
  }
  onItemSelect($event) {

  }
}
