import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform : FormGroup;

  constructor( private fb : FormBuilder, private auth: AuthenticationService ) { }

  ngOnInit() {
    this.loginform = this.fb.group({
      'username': [null,[Validators.required,Validators.minLength(3)]],
      'password': [null,Validators.required]
    });

  }


  login(formData : NgForm)
  {
    this.auth.signup(formData).subscribe
    ((user) => console.log(user))
  }

}
