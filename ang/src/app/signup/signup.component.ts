import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform : FormGroup;
  // @ViewChild('fform',{static: true}) signupformDirective;

  public formErrors:any = {
    'username': '',
    'name': '',
    'password': '',
    'email': ''
  };

  public d1 = [
  ]

 public validationMessages = {
    'username': {
      'required':      'User Name is required.',
      'minlength':     'User Name must be at least 3 characters long.',
      'maxlength':     'User Name cannot be more than 25 characters long.'
    },
    'name': {
      'required':      ' Name is required.',
      'minlength':     ' Name must be at least 2 characters long.',
      'maxlength':     ' Name cannot be more than 25 characters long.'
    },
    'password': {
      'required':      'Password is required.',
      'minlength':     'Password must be at least 6 characters long.',
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };



  constructor( private fb : FormBuilder, private auth: AuthenticationService, private router:Router ) { 
    this.createform();

  }

  ngOnInit() {
  }


  createform()
  {
    this.signupform = this.fb.group({
      'username': ['',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
      'password': ['',[Validators.required,Validators.minLength(6)]],
      'name': ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      'email':['',[Validators.required,Validators.email]]
    });

    this.signupform.valueChanges
    .subscribe(data => {
      this.onvaluechange(data);
      console.log(this.formErrors);
    });

    this.onvaluechange();

  }



  onvaluechange(data?: any)
  {
    if(!this.signupform) {return;}
    const form = this.signupform;

    for(const field in this.formErrors)
    {
      if(this.formErrors.hasOwnProperty(field))
      {
        this.formErrors[field] = '';
        const control = form.get(field);
        if(control && control.dirty && !control.valid)
        {
          const messages = this.validationMessages[field];
          for(const key in control.errors)
          {
            if(control.errors.hasOwnProperty(key))
            {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }

  }



  signup(formData : NgForm):void
  {
    this.auth.signup(formData).subscribe
    ((user) => {
      console.log(`added user ${JSON.stringify(user)}`);
      this.router.navigate(['login']);
    });
    this.signupform.reset();
    // this.signupformDirective.resetForm();
  }
}
