import { Component, OnInit ,Input} from '@angular/core';
import {ConfigService} from '../config.service';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
 
  blog: any = {};
  allitems: any[];
  pages: any[];
  pager : any = {};
  pagesize = 4;

  constructor(private config :ConfigService , private pagerserv: PagerService) { }

  ngOnInit() {
    this.blog = this.getblogs();
    this.allitems = this.blog.posts;
    this.setpage(1);
  }

  getblogs(){
    return this.config.getConfig().blog;
  }

  setpage(pagenumber : number)
  {
    this.pager = this.pagerserv.getpager(this.allitems.length,pagenumber,this.pagesize);

    this.pages = this.allitems.slice(this.pager.startindex,this.pager.endindex+1);  
  }

}
