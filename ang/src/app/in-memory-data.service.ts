import { Injectable } from '@angular/core';
import { InMemoryDbService , RequestInfo, ResponseOptions} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const user = [
        { id: 1, name: 'Vineet', username: 'imVR7',email:'vineetrathor57@gmail.com',password :'welcome','bio': 'This is the VR7','image':'1.jpg'},
        { id: 2, name: 'Vineet rathor', username: 'imV2',email:'vineetrathor009@gmail.com',password:'welcome','bio': 'This is the 2nd VR7','image':'2.jpg'},
      ];   

      const menu = [
        {id: 1,title:'home',link: '/home'},
        {id: 2,title:'tour packages',link: '/tourpackage'},
        {id: 3,title:'blog',link: '/blog'},
        {id: 4,title:'login',link: '/login'},
        {id: 5,title:'signup',link: '/signup'},
        // {id: 6,title:'profile',link: '/:name/profile'},
        
      ];

      const posts = [
        {id:1,title:'First one is always the king of the worlds',author:'VR7',date:'2018-03-19T07:22Z',excert:'Traveled to the end of the World asdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddwwwwwwwwwwwwwwwwwwwcccccccccccqqqqqqqqqqqqqqqqeeeeeeeeeezzzzzzzzzzzzzzzzzzzzzzzzz eaaaaaaaaaaaaaaaaaaaaaaaa',image:'pic1.jpg'},
        {id:2,title:'Second one',author:'VR17',date:'2018-03-19T07:22Z',excert:'Traveled to the end of the World',image:'pic1.jpg'},
        {id:3,title:'First third one',author:'VR27',date:'2018-03-19T07:22Z',excert:'Traveled to the end of the World',image:'pic1.jpg'},
        {id:4,title:'First Second one',author:'VR37',date:'2018-03-19T07:22Z',excert:'Traveled to the end of the World',image:'pic1.jpg'},
        {id:5,title:'last one',author:'VR47',date:'2018-03-19T07:22Z',
        excert:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo aliquam eos eligendi delectus quam, labore expedita quas asperiores, quibusdam eius, saepe culpa? Id eius animi enim nisi sapiente officiis voluptas?',image:'pic1.jpg'},
        {id:6,title:'First Second one',author:'VR37',date:'2018-03-19T07:22Z',excert:'Traveled to the end of the World',image:'pic1.jpg'},
        {id:7,title:'First Second one',author:'VR37',date:'2018-03-19T07:22Z',excert:'Traveled to the end of the World',image:'pic1.jpg'},
        {id:8,title:'First Second one',author:'VR37',date:'2018-03-19T07:22Z',excert:'Traveled to the end of the World',image:'pic1.jpg'},
        {id:9,title:'First Second one',author:'VR37',date:'2018-03-19T07:22Z',excert:'Traveled to the end of the World',image:'pic1.jpg'},
        {id:10,title:'First Second one',author:'VR37',date:'2018-03-19T07:22Z',excert:'Traveled to the end of the World',image:'pic1.jpg'}, 
      ]

      return {user,posts,menu};
    }



    getToken(users)
    {
      return "This is a token";
    }

    get(reqInfo : RequestInfo)
    {
      if(reqInfo.collectionName === 'posts')
      {
        return this.getarticles(reqInfo);
      }
      return undefined;
    }

    getarticles(reqInfo:RequestInfo)
    {
        return reqInfo.utils.createResponse$(() => {
          const dataEncap = reqInfo.utils.getConfig().dataEncapsulation;
          const id = reqInfo.id;
          const collection = reqInfo.collection;
          const data = id === undefined ? collection : reqInfo.utils.findById(collection,id);


          // console.log(resonseBody);

          const options : ResponseOptions = data ?
          {
            body: dataEncap ? {data}:data,
            status: 200
          }:
          {
            body: { error: "Post not found"},
            status: 404
          };
          options.statusText = options.status === 200 ? 'ok' : 'not found';
          options.headers = reqInfo.headers;
          options.url = reqInfo.url;
          return options;
        });
    
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
