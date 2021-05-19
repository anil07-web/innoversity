import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  // registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  public registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    domain: ['', [Validators.required]]

  });


  ngOnInit(): void {
    // this.initForm();
    this.dropdownList = this.getData();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',

    };
  }

  onItemSelect($event) {
    // console.log($event);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      alert('Forms is invalid');
    }
  }

  get username() { return this.registerForm.get('username') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get domain() { return this.registerForm.get('domain') }

  getData(): Array<any> {
    return [
      { item_id: 1, item_text: 'Science' },
      { item_id: 2, item_text: 'Engineering' },
      { item_id: 3, item_text: 'Aerospace' },
      { item_id: 4, item_text: 'Habitat' },
      { item_id: 5, item_text: 'Electricity' },
      { item_id: 6, item_text: 'Power Sources' },
      { item_id: 7, item_text: 'Environment' }

    ];
  }

}
