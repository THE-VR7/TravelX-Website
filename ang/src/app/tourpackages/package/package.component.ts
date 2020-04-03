import { Component, OnInit , Input, OnDestroy} from '@angular/core';
import {ConfigService} from '../../config.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit,OnDestroy {
  package = {};
  key = "nothing";
  chilmsg = "";
  private param: Subscription;
  constructor(private config:ConfigService) { }

  ngOnInit() {
   this.param =  this.config.message
   .subscribe(chilmsg => this.chilmsg = chilmsg)
   this.getchilmsg(this.chilmsg);
  }



  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.param.unsubscribe();
  }
  getchilmsg(chilmsg : string)
  {
if(chilmsg !== "Default message"){
    window.localStorage.setItem(this.key,chilmsg);
    const p1 = this.config.getConfig().package.place;
    const pack = p1.find(function(todo,index){
      return todo.name.toLowerCase() === chilmsg.toLowerCase();
    })
    console.log(pack);
    this.package = pack;
  }
  else
  {
    console.log(chilmsg);
    chilmsg = window.localStorage.getItem(this.key);
    console.log(chilmsg);
    if(localStorage.getItem(this.key)!=="nothing")
    {
      this.getchilmsg(chilmsg);
    }
  }
}
}
