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
    this.isloggedin = this.auth.isloggedin();


//      (<any>$)(function() {
//     var header = (<any>$)('.GreyHeader');
//     (<any>$)(document).scroll(function() {    
//         var scroll = (<any>$)(document).scrollTop();
//         console.log(scroll);
//         if (scroll >= 3300)
//         {
//             header.removeClass('FireBrickRed ').addClass('GreyHeader');
//         }
//         else if (scroll >= 2750)
//         {
//             header.removeClass('GreyHeader').addClass('FireBrickRed ');
//         }
//         else if (scroll >= 2100)
//         {
//             header.removeClass('FireBrickRed ').addClass('GreyHeader');
//         }
//         else if (scroll >= 700) {
//             header.removeClass('GreyHeader').addClass('FireBrickRed ');
//         }
//         else {
//             header.removeClass('FireBrickRed ').addClass('GreyHeader');
//         }
//     });
// });



  }
  

  logout()
  {
    this.auth.logout( );
  }
}
