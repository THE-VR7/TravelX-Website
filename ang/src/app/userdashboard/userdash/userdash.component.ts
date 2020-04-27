import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { user } from '../../user';
import { FormGroup, FormBuilder, Validators, NgForm ,  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {

  user : user;
  isloggedin: boolean;
  ct: boolean[] = [true,true,true,true,true];
  editform : FormGroup;


  constructor( private router : Router, private config: ConfigService,private fb : FormBuilder, ) { }

  ngOnInit() {
    this.getuser();

    this.editform = this.fb.group({
      'id': [null,Validators.required],
      'name': [null,Validators.required],
      'username':[null,Validators.required],
      'email':[null,Validators.required],
      'bio':[null],
      'image':[null],
      'phone':[null],
      
    });
  }


  getuser()
  {
    var localuser = JSON.parse(localStorage.getItem('currentuser'));
    // console.log(localuser.id);
    this.config.getuserbyid(localuser.id).subscribe(
        user =>{
          this.user = user;
          this.editform.setValue({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            bio : user.bio,
            image: user.image,
            phone: user.phone
          });
          // console.log(user);
        }
    );
      this.isloggedin = true;
    
  }
  logout()
  {
    localStorage.removeItem('currentuser');
    this.isloggedin = false;
    this.router.navigate(['/home']);
  }

  edit(ind:number)
  {
    this.ct[ind]=false;
  }
  show(id:number)
  {
    this.ct[id]=true;
  }

  updateform(formdata : NgForm,ind:number)
  {
    // console.log(formdata);
    this.config.updateuser(formdata).subscribe(
    () => {
      this.getuser();
    }   
    );
    this.show(ind);
  }

  // updatename(formdata : NgForm)
  // {
  //   console.log(formdata);
  // //   this.editform.patchValue({
  // //     'username': 
  // //  });
  // }


}
