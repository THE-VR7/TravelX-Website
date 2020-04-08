import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform : FormGroup;

  constructor( private fb : FormBuilder, private auth: AuthenticationService ) { }

  ngOnInit() {
    this.signupform = this.fb.group({
      'username': [null,[Validators.required,Validators.minLength(3)]],
      'password': [null,Validators.required],
      'name': [null,Validators.required],
      'email':[null,[Validators.required,Validators.email]]
    });
  }


  signup(formData : NgForm)
  {
    this.auth.signup(formData).subscribe
    ((user) => console.log(user))
  }
}
