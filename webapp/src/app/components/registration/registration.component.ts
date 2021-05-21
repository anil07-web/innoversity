import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RegistrationService } from 'src/app/services/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,private service : RegistrationService) { }
   initForm() {
   this.registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required]],
    city: ['', [Validators.required]],
    domain: ['', [Validators.required]],
    picture: ['', [Validators.required]],
    gender: ['',[Validators.required]]
  });
}


  ngOnInit(): void {
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

  onItemSelect($event) {

  }

 

  msg:any;
  onSubmit() {
    if (this.registerForm.valid) {
      this.service.registerUser(this.registerForm.value).subscribe(data => {
        this.msg="You are registered !";
        // console.log(this.registerForm.value);
      }

      )
    } else {
      console.log("form is invalid");
      this.msg="Registeration unsuccessful";
    }
  }


  get username() { return this.registerForm.get('username') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get domain() { return this.registerForm.get('domain') }
  get city() { return this.registerForm.get('city') }
  get picture() { return this.registerForm.get('picture') }
  get gender() { return this.registerForm.get('gender') }




  
  public mystyle = {
    fontSize:"30px",
    fontStyle:"italic"
  }


  url = "./assets/banner1.webp";
  onSelectFile(e) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }








  selectedFile: File;
  base64Data: any;
  message: string;
  imageName: any;
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    console.log(this.selectedFile);
    
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
  //   this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
  //     .subscribe((response) => {
  //       if (response.status === 200) {
  //         this.message = 'Image uploaded successfully';
  //       } else {
  //         this.message = 'Image not uploaded successfully';
  //       }
  //     }
  //     );
  }



}
