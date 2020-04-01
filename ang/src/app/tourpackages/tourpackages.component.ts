import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-tourpackages',
  templateUrl: './tourpackages.component.html',
  styleUrls: ['./tourpackages.component.css']
})
export class TourpackagesComponent implements OnInit {

  tourpack = {};


  constructor(private config:ConfigService ) { }

  ngOnInit() {
    this.tourpack = this.getfeatures();

  }

  getfeatures(){
    return this.config.getConfig().tourpackages;
  }
}
