import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const users = [
        { id: 1, name: 'Vineet', username: 'imVR7',email:'vineetrathor57@gmail.com',password :'welcome'},
        { id: 2, name: 'Vineet rathor', username: 'imV2',email:'vineetrathor009@gmail.com',password:'welcome'},
      ];
      return {users};
    }


}
