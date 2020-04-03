import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { configuration} from './configuration';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private teachmsg = new BehaviorSubject<string>("Default message");
  message = this.teachmsg.asObservable();
  config = configuration;
  constructor() { }

  getConfig(){
    return this.config;
  }

  sendmassage(message : string)
  {
    this.teachmsg.next(message);
  }

}

