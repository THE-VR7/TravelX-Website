import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  intro = {  };


  constructor( private config:ConfigService ) { }

  ngOnInit() {
    this.intro = this.getintro();
  }

  getintro(){
    return this.config.getConfig().aboutus;
  }
}
