import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  banner =  {
  };



  constructor(private config : ConfigService) { }

  ngOnInit() {
   this.banner =  this.getbanner();
  }

  getbanner(){
    return this.config.getConfig().banner;
  }

}
