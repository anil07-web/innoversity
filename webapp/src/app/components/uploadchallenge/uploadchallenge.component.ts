import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
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
  uploadChallenge: FormGroup;
  public challenge = new Challenge;
  uploadSuccess = false;
  successMessage = 'Challenge uploaded successfully';
  handler:any = null;
  constructor(private fb:FormBuilder,private service:UploadchallengeService) { }

  ngOnInit(): void {
    this.loadStripe();
    this.initForm();
    this.dropdownList = ["Science","Engineering", "Aerospace","Habitat","Electricity","Power Sources","Environment"];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      
    };
  }
  initForm() {
    this.uploadChallenge = this.fb.group({
     challengerName: [''],
     challengeTitle: [''],
     challengeDomain: [''],
     challengeAbstract: [''],
     description: [''],
     rules: ['']
    
   });
 }
  onSubmit( ){
   
    this.service.addChallenge(this.uploadChallenge.value).subscribe(data => {
      this.uploadSuccess= true;
    });
      console.log(this.uploadChallenge.value);
      this.uploadSuccess= true;
   
   
  }
  onItemSelect($event) {

  }
  get challengeName() { return this.uploadChallenge.get('challengeName') }
  get challengeTitle() { return this.uploadChallenge.get('challengeTitle') }
  get challengeDomain() { return this.uploadChallenge.get('challengeDomain') }
  get challengeAbstract() { return this.uploadChallenge.get('challengeAbstract') }
  get description() { return this.uploadChallenge.get('description') }
  get rules() { return this.uploadChallenge.get('rules') }
  
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '4rem',
      minHeight: '4rem',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      enableToolbar: true,
      showToolbar: false,
      // placeholder: 'Enter  Challenge description here...',
      defaultParagraphSeparator: '',
      defaultFontName: 'Times New Roman',
      defaultFontSize: '12',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
    
    sanitize: true,
    toolbarPosition:'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};

pay(amount: any) {    
 
  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51Itz8xSEYEK3dxaT6Wxv2YqSd5P57ZM40EWFx2j9uUIes3FqIzrw6j3ihg1iMozBLQv4isCoCw8wx4750he7t65D00h7ccJVas',
    locale: 'auto',
    token: function (token: any) {
      console.log(token.id)
      alert('Token Created!!');
      
    }
  });
  handler.open({
    name: 'Demo Site',
    description: '2 widgets',
    amount: amount * 100
  });

}
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Itz8xSEYEK3dxaT6Wxv2YqSd5P57ZM40EWFx2j9uUIes3FqIzrw6j3ihg1iMozBLQv4isCoCw8wx4750he7t65D00h7ccJVas',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}

