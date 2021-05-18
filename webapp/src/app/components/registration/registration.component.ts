import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  public registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  ngOnInit(): void {
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


}
