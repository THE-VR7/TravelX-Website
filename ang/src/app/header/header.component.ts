import { Component, OnInit ,Input} from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // activetab = 'home';
  isloggedin:boolean;
  

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.isloggedin = this.auth.isloggedin;
  }
  // getactivetab(tabname:string){
  //   this.activetab = tabname;
  // }

  logout()
  {
    this.auth.logout( );
  }
}
