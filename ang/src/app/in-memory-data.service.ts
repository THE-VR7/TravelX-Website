import { Injectable } from '@angular/core';
import { InMemoryDbService , RequestInfo, ResponseOptions} from 'angular-in-memory-web-api';

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



    getToken(users)
    {
      return "This is a token";
    }

    post(reqInfo : RequestInfo)
    {
      if(reqInfo.id === 'login')
      {
        console.log("from login");
        return reqInfo.utils.createResponse$(() => {
          const dataEncap = reqInfo.utils.getConfig().dataEncapsulation;
          const users = reqInfo.collection.find(usr => {
            return reqInfo.req['body'].username === usr.username && reqInfo.req['body'].password === usr.password;
          });
          // console.log(users);

          let resonseBody = {};
          if(users)
          { 
            resonseBody = {
              id: users.id,
              email: users.email,
              name: users.name,
              token : this.getToken(users)
            }; 

          }
          // console.log(resonseBody);

          const options : ResponseOptions = resonseBody ?
          {
            body: dataEncap ? {resonseBody}:resonseBody,
            status: 200
          }:
          {
            body: { error: "User with id= `${reqInfo.req['body'].username}` not found "},
            status: 404
          };

          options.statusText = options.status === 200 ? 'ok' : 'not found';
          options.headers = reqInfo.headers;
          options.url = reqInfo.url;
          return options;


        });
    
    
    
    
    }
      else if(reqInfo.id === 'signup')
      {
        reqInfo.id = null;
        console.log("from signup");
      }

    }

}
