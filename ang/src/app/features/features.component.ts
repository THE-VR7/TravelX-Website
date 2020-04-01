import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  features = {};

  constructor(private config:ConfigService ) { }

  ngOnInit() {
    this.features = this.getfeatures();

  }

  getfeatures(){
    return this.config.getConfig().features;
  }

}
