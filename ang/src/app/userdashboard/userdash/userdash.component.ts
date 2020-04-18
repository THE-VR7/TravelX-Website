import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { user } from '../../user';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {

  user : user;
  isloggedin: boolean;


  constructor( private router : Router, private config: ConfigService ) { }

  ngOnInit() {
    this.getuser();
  }

  getuser()
  {
    var localuser = JSON.parse(localStorage.getItem('currentuser'));
    // console.log(localuser.id);
    this.config.getuserbyid(localuser.id).subscribe(
        user =>{
          this.user = user
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
}
