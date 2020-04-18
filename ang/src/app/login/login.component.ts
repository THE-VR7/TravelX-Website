import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { NgwWowService } from 'ngx-wow';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform : FormGroup;
  returnurl:String ;

  constructor( private fb : FormBuilder, private auth: AuthenticationService ,
    private router : Router
    , private route: ActivatedRoute, private wowService: NgwWowService) { }

  ngOnInit() {
    this.loginform = this.fb.group({
      'username': [null,[Validators.required,Validators.minLength(3)]],
      'password': [null,Validators.required]
    });

    this.returnurl = this.route.queryParams['returnurl'] || '/';
    // this.wowService.init();
  }


  login(formData : NgForm)
  {
    // console.log(formData);
    this.auth.login(formData).subscribe
    ((user) => {
      console.log(user)
      this.router.navigate([this.returnurl]);
    })
  }

}
